import HexAnimation2 from "@/components/animations/hexFigure2";
import { Main } from "@/components/Main";
import { PlanCard } from "@/components/PlanCard";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { basicPlan, premiumPlan, servers, trialPlan } from "@/model/const";
import Link from "next/link";

export default function App() {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex min-h-[100vh] flex-col gap-6 md:gap-[205px]'>
        <Main />
        <div className='flex flex-col gap-16 py-[149px] md:gap-20 lg:gap-[140px]'>
          <Section id='subPlan' title='Тарифы и планы' subTitle='Предоставляем доступные цены <br/> за наши услуги'>
            <PlanCard {...basicPlan} />
            <PlanCard {...trialPlan} />
            <PlanCard {...premiumPlan} />
          </Section>

          <Section id='servers' title='Серверы по всему миру' subTitle='Постоянно расширяем <br/> возможности'>
            {servers.map((server, index) => (
              <Card
                key={index}
                className='w-full cursor-default bg-background p-[37px]! text-center text-subtitle2 transition-all duration-400 hover:shadow-[0_7px_30px_-10px_#9F9FA9]'
              >
                {server}
              </Card>
            ))}
          </Section>

          <Section id='about' title='Полная безопасность' subTitle='Шифрование данных'>
            <Card className='z-10 w-full cursor-default transition-all duration-400 hover:shadow-[0_7px_30px_-10px_#9F9FA9] md:min-h-[214px]'>
              <CardHeader className='flex flex-col gap-5 pb-10 lg:gap-7'>
                <CardTitle className='text-subtitle2'>Протокол VLESS</CardTitle>
                <CardDescription>
                  <p className='text-main-text lg:text-subtitle2'>
                    Легковесный транспортный протокол, который обеспечивает безопасную связь между клиентом
                    и&nbsp;сервером
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className='z-10 w-full cursor-default transition-all duration-400 hover:shadow-[0_7px_30px_-10px_#9F9FA9]'>
              <CardHeader className='flex flex-col gap-5 pb-10 lg:gap-7'>
                <CardTitle className='text-subtitle2'>Анонимность</CardTitle>
                <CardDescription>
                  <p className='text-main-text lg:text-subtitle2'>Мы не сохраняем данные пользователей</p>
                </CardDescription>
              </CardHeader>
            </Card>

            <div className='absolute -top-10 -left-[100px] -z-10 md:-top-[120px] md:-left-[114px] lg:z-0'>
              <HexAnimation2 />
            </div>
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
    </div>
  );
}
