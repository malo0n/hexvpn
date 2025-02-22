import HexAnimation2 from "@/components/hexFigure2";
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
      <div className='flex min-h-[100vh] flex-col gap-[205px]'>
        <Main />
        <div className='flex flex-col gap-[140px] py-[149px]'>
          <Section id='subPlan' title='Тарифы и планы' subTitle='Предоставляем доступные цены <br/> за наши услуги'>
            <PlanCard {...basicPlan} />
            <PlanCard {...trialPlan} />
            <PlanCard {...premiumPlan} />
          </Section>

          <Section id='servers' title='Серверы по всему миру' subTitle='Постоянно расширяем <br/> возможности'>
            {servers.map((server, index) => (
              <Card key={index} className='w-full cursor-default bg-background p-[37px]! text-center text-subtitle2'>
                {server}
              </Card>
            ))}
          </Section>

          <Section id='about' title='Полная безопасность' subTitle='Шифрование данных'>
            <Card className='min-h-[214px] w-full'>
              <CardHeader className='flex flex-col gap-7 pb-10'>
                <CardTitle className='text-subtitle1'>Протокол VLESS</CardTitle>
                <CardDescription>
                  <p className='text-subtitle2'>
                    Легковесный транспортный протокол, который обеспечивает безопасную связь между клиентом
                    и&nbsp;сервером
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className='min-h-[214px] w-full'>
              <CardHeader className='flex flex-col gap-7 pb-10'>
                <CardTitle className='text-subtitle1'>Анонимность</CardTitle>
                <CardDescription>
                  <p className='text-subtitle2'>Мы не сохраняем данные пользователей</p>
                </CardDescription>
              </CardHeader>
            </Card>

            <div className='absolute -top-[120px] -left-[114px] -z-10 w-[30vw]'>
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
