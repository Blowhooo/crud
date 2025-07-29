import Link from "next/link";

export default function Button({
  as = "button",
  type = "button",
  href,
  target,
  children,
  id,
  full = false,
  className = "",
  onClick,
}) {
  const baseClassName = [
    "text-sm py-2 px-4 bg-black text-white rounded-sm hover:opacity-70 transition-opacity cursor-pointer",
    full && "w-full",
    className, // 사용자 커스텀 클래스
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    if (!href) return null;

    return (
      <Link
        href={href}
        target={target}
        rel="noopener noreferrer"
        id={id}
        className={baseClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      className={baseClassName}
    >
      {children}
    </button>
  );
}
