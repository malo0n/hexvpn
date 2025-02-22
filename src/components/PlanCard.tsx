import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Mark } from "./ui/Mark";

export const basicPlan: Props = {
  title: "Базовый",
  price: "от 56 руб/мес",
  features: ["Не более 3 устройств", "Скорость до 1 Гбит/с"],
  variant: "background",
};

export const trialPlan: Props = {
  title: "Пробный период",
  price: "0 руб/мес",
  features: ["7 дней пробного периода", "Не более 3 устройств", "Скорость до 1 Гбит/с"],
  variant: "accent",
};

export const premiumPlan: Props = {
  title: "Премиум",
  price: "от 100 руб/мес",
  features: ["Не более 10 устройств", "Скорость до 10 Гбит/с", "Приоритетная работа техподдержки"],
  variant: "background",
};

interface Props {
  title: string;
  price: string;
  features: string[];
  variant: "background" | "accent";
}

export const PlanCard = (props: Props) => {
  const { title, price, features, variant } = props;
  return (
    <Card className={`bg-${variant} min-h-[400px]`}>
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
        <Button variant={variant === "background" ? "outline" : "default"} asChild>
          <Link href={"https://t.me/vpnhex_bot"}>{variant === "accent" ? "Попробовать" : "Узнать больше"}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
