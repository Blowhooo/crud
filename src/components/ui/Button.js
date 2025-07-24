import Link from "next/link";

export default function Button({
  as="button",
  type="button",
  href,
  target,
  children,
  id,
  className,
  onClick,
}) {
  if (as === "a") {
    if (!href) return null;

    return (
      <Link
        href={href}
        target={target}
        rel="noopener noreferrer"
        id={id}
        className={className}
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
      className={className}
    >
      {children}
    </button>
  );
}