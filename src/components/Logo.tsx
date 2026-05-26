import logo from "@/assets/kinetix-logo.png";

export function Logo({ size = 36, withWordmark = true }: { size?: number; withWordmark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logo}
        alt="Kinetix logo"
        width={size}
        height={size}
        className="rounded-[10px] shadow-sm"
      />
      {withWordmark && (
        <span
          className="font-black tracking-tight text-foreground"
          style={{ fontSize: size * 0.6, letterSpacing: "-0.04em" }}
        >
          Kinetix
        </span>
      )}
    </div>
  );
}
