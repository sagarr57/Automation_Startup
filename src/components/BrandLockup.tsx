type BrandLockupProps = {
  footer?: boolean;
  full?: boolean;
};

export function BrandLockup({ footer = false, full = false }: BrandLockupProps) {
  if (full) {
    return (
      <div className="brand brand-full">
        <img
          className="brand-full-mark"
          src="/logo/Dravyx_logo_transparent_cropped_white.png"
          alt="Dravyx AI logo"
        />
      </div>
    );
  }

  return (
    <div className={footer ? "brand brand-footer" : "brand"}>
      <img
        className="brand-mark"
        src="/logo/Dravyx_logo_transparent_cropped_white.png"
        alt="Dravyx AI logo"
      />
    </div>
  );
}
