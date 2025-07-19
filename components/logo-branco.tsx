import Image from "next/image";

export const LogoBranco = ({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) => (
  <div
    className={`relative aspect-[1/1] ${className}`}
    style={{ width: size, height: size, minWidth: size, minHeight: size }}
  >
    <Image
      src="/images/Logo_Branco.svg"
      alt="André Jorge Logo"
      fill
      style={{ objectFit: "contain" }}
      priority
      sizes="(max-width: 768px) 48px, 64px"
    />
  </div>
);
