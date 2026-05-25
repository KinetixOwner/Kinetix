// supabase/functions/_shared/stripe.ts

/**
 * STRIPE_CONFIG: The Source of Truth for your Price IDs.
 * Copy these from your Stripe Dashboard (Products section).
 */
export const STRIPE_CONFIG = {
    explorer: "price_1TNbdg7z117f9uiLk3CfvJmO", 
    mastery: "price_1TNbfU7z117f9uiL8McDfLLR",
    elite: "price_1TNgMe7z117f9uiLZcZ8IL5N",
  };
  
  /**
   * TIER_PERMISSIONS: Controls which AI model each user gets.
   * Mastery and Elite unlock the 'Pro' reasoning model.
   */
  export const TIER_PERMISSIONS = {
    free: { 
      model: "gemini-1.5-flash", 
      limit: 5,
      label: "FREE_NODE" 
    },
    explorer: { 
      model: "gemini-1.5-flash", 
      limit: 100,
      label: "EXPLORER_NODE" 
    },
    mastery: { 
      model: "gemini-1.5-pro", 
      limit: 1000,
      label: "MASTERY_NODE" 
    },
    elite: { 
      model: "gemini-1.5-pro", 
      limit: 9999,
      label: "ELITE_NODE" 
    },
  };
  
  /**
   * PRICE_TO_TIER: Helper to convert a Stripe Price ID back into a database tier name.
   * Used primarily in your Webhook logic.
   */
  export const PRICE_TO_TIER: Record<string, string> = {
    [STRIPE_CONFIG.explorer]: 'explorer',
    [STRIPE_CONFIG.mastery]: 'mastery',
    [STRIPE_CONFIG.elite]: 'elite',
  };