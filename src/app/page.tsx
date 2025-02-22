import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { basicPlan, PlanCard, premiumPlan, trialPlan } from "@/components/PlanCard";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div className='flex w-full flex-col'>
      <Header />
      <div className='flex min-h-[100vh] flex-col gap-[205px]'>
        <Main />
        <div className='flex flex-col gap-[140px] py-[149px]'>
          <Section id='subPlan' title='Тарифы и планы' subTitle='Предоставляем доступные цены <br/> за наши услуги'>
            <PlanCard {...basicPlan} />
            <PlanCard {...trialPlan} />
            <PlanCard {...premiumPlan} />
          </Section>

          <Section id='servers' title='Серверы по всему миру' subTitle='Постоянно расширяем <br/> возможности'>
            <Card className='w-full cursor-default bg-background p-[37px]! text-center text-subtitle2'>Турция</Card>
            <Card className='w-full cursor-default bg-background p-[37px]! text-center text-subtitle2'>Нидерланды</Card>
            <Card className='w-full cursor-default bg-background p-[37px]! text-center text-subtitle2'>Германия</Card>
          </Section>

          <Section id='about' title='Полная безопасность' subTitle='Шифрование данных'>
            <Card>
              <div className='flex flex-col gap-7'>
                <p className='text-subtitle1'>Протокол VLESS</p>
                <p className='text-subtitle2'>
                  Легковесный транспортный протокол, который обеспечивает безопасную связь между клиентом
                  и&nbsp;сервером
                </p>
              </div>
            </Card>
            <Card className='h-[276px]! self-start'>
              <div className='flex h-full flex-col gap-7'>
                <p className='text-subtitle1'>Анонимность</p>
                <p className='text-subtitle2'>Мы не сохраняем данные пользователей</p>
              </div>
            </Card>

            <Image
              src={"/hexFigure2.svg"}
              priority
              width={800}
              height={720}
              alt={"hexFigure"}
              className='absolute -top-[120px] -left-[114px] -z-10 w-[30vw]'
            ></Image>
          </Section>

          <Section id='bottom' title='Попробуйте бесплатно' subTitle='Неделя надежного VPN'>
            <div className='flex w-full items-center justify-center'>
              <Button variant='accent' asChild>
                <Link href={"https://t.me/vpnhex_bot"}>Узнать больше</Link>
              </Button>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
