import { serve } from "https://deno.land/std@0.177.0/http/server.ts"
import Stripe from "https://esm.sh/stripe@11.16.0?target=deno"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7"
import { PRICE_TO_TIER } from "../_shared/stripe.ts"

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
  apiVersion: '2022-11-15',
  httpClient: Stripe.createFetchHttpClient(),
})

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')
  if (!signature) return new Response('No signature', { status: 400 })

  try {
    const body = await req.text()
    const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
    const event = stripe.webhooks.constructEvent(body, signature, endpointSecret!)

    console.log(`🔔 Event received: ${event.type}`)

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

      const userId = session.client_reference_id
      const priceId = session.metadata?.priceId
      const customerEmail = session.customer_details?.email || session.customer_email

      if (userId && priceId) {
        const tier = PRICE_TO_TIER[priceId] || 'pro'
        
        // 1. Update Profile
        const { error: dbError } = await supabase
          .from('profiles')
          .update({ subscription_tier: tier, stripe_customer_id: session.customer })
          .eq('id', userId)

        if (dbError) throw dbError

        // 2. Send Onboarding Email
        if (customerEmail) {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'Kinetix Protocol <onboarding@resend.dev>',
              to: [customerEmail],
              subject: `INITIALIZATION COMPLETE: ${tier.toUpperCase()}`,
              html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 40px; border-radius: 15px;">
                  <h1 style="color: #2563eb;">Protocol Sync Complete.</h1>
                  <p>Welcome to the <strong>${tier}</strong> tier.</p>
                  <p>Your journey into neural architecture begins now. You will master AI agents, custom pipelines, and elite deployment strategies.</p>
                  <a href="${Deno.env.get('SITE_URL')}/dashboard" style="display:inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 5px;">Enter Dashboard</a>
                </div>`
            }),
          })
        }
      }
    }
    return new Response(JSON.stringify({ received: true }), { status: 200 })
  } catch (err) {
    console.error(`❌ Webhook Error: ${err.message}`)
    return new Response(`Error: ${err.message}`, { status: 400 })
  }
})