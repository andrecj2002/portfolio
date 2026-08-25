import Image from "next/image";

export const LogoBranco = ({
  className = "",
  size = 48,
  height = size,
}: {
  className?: string;
  size?: number;
  height?: number;
}) => (
  <div
    className={`relative ${className}`}
    style={{
      width: size,
      height,
      minWidth: size,
      minHeight: height,
    }}
  >
    <Image
      src="/images/Logo_Branco.svg"
      alt="André Jorge Logo"
      className="invert dark:invert-0"
      fill
      style={{ objectFit: "contain" }}
      priority
      sizes="(max-width: 768px) 48px, 64px"
    />
  </div>
);
