import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Mark } from "./ui/Mark";

export interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  variant: "secondary" | "accent";
}

export const PlanCard = (props: PlanCardProps) => {
  const { title, price, features, variant } = props;
  return (
    <Card style={{ backgroundColor: `var(--${variant})` }} className={`min-h-[400px]`}>
      <CardHeader className='flex flex-col items-center'>
        <CardTitle className='text-center'>{title}</CardTitle>
        <CardDescription className='text-main-text'>{price}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col items-center'>
        <div className='flex w-fit flex-col gap-7'>
          {features.map((feature, index) => (
            <Mark key={index} variant={variant} text={feature} />
          ))}
        </div>
      </CardContent>
      <CardFooter className='mt-auto flex justify-center'>
        <Button variant={variant === "secondary" ? "outline" : "default"} asChild>
          <Link href={"https://t.me/vpnhex_bot"}>{variant === "accent" ? "Попробовать" : "Узнать больше"}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
