import Link from "next/link";

interface Props {
  href: string;
  variant: "blue" | "white" | "accent";
  children: string;
}

export const Button = (props: Props) => {
  const { href, variant } = props;
  return (
    <Link
      className={`rounded-md px-8 py-4 text-main-text text-(--background) transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_14px_90px_-10px_var(--secondary)] ${variant === "accent" ? "bg-accent text-secondary" : variant === "blue" ? "bg-secondary text-background" : "bg-background"}`}
      href={href}
    >
      {props.children}
    </Link>
  );
};
