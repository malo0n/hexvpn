import Link from "next/link"

interface Props {
  href: string;
  variant: 'blue' | 'white' | 'accent';
  children: string
}


export const Button = (props: Props) => {
  const {href, variant} = props;
  return (
    <Link className={` text-blue  px-8 py-4 text-mainText rounded-md hover:shadow-[0_14px_90px_-10px_var(--secondary)] hover:-translate-y-1 duration-[400ms] transition-all ${variant === 'accent' ? 'bg-accent text-secondary' :  variant === 'blue' ? 'bg-secondary text-background' : 'bg-background'}`} href={href}>{props.children}</Link>
  )
}