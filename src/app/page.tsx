import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Mark } from "@/components/Mark";
import { Section } from "@/components/Section";
import Image from "next/image";

export default function App() {
  return (
    <div className='flex w-full flex-col'>
      <Header />
      <div className='flex min-h-[100vh] flex-col gap-[205px]'>
        <Main />
        <div className='flex flex-col gap-[140px] py-[149px]'>
          <Section id='subPlan' title='Тарифы и планы' subTitle='Предоставляем доступные цены <br/> за наши услуги'>
            <Card color='light'>
              <div className='flex flex-col items-center gap-[73px]'>
                <div className='flex flex-col items-center gap-[56px]'>
                  <div className='flex flex-col items-center gap-7'>
                    <p className='text-subtitle1'>Базовый</p>
                    <p className='text-mainText'>от 56 руб/мес</p>
                  </div>
                  <div className='flex flex-col gap-7'>
                    <Mark variant='primary' text='Не более 3 устройств' />
                    <Mark variant='primary' text='Скорость до 1 Гбит/с' />
                  </div>
                </div>
                <Button variant='blue' href={"https://t.me/vpnhex_bot"}>
                  Узнать больше
                </Button>
              </div>
            </Card>
            <Card color='accent'>
              <div className='flex flex-col items-center gap-[97px]'>
                <div className='flex flex-col items-center gap-[56px]'>
                  <div className='flex flex-col items-center gap-7'>
                    <p className='text-center text-subtitle1'>Пробный период</p>
                    <p className='text-mainText'>0 руб/мес</p>
                  </div>
                  <div className='flex flex-col gap-7'>
                    <Mark variant='secondary' text='7 дней пробного периода' />
                    <Mark variant='secondary' text='Не более 3 устройств' />
                    <Mark variant='secondary' text='Скорость до 1 Гбит/с' />
                  </div>
                </div>
                <Button variant='white' href={"https://t.me/vpnhex_bot"}>
                  Попробовать
                </Button>
              </div>
            </Card>
            <Card color='dark'>
              <div className='flex flex-col items-center gap-[94px]'>
                <div className='flex flex-col items-center gap-[56px]'>
                  <div className='flex flex-col items-center gap-7'>
                    <p className='text-center text-subtitle1'>Премиум</p>
                    <p className='text-mainText'>от 100 руб/мес</p>
                  </div>
                  <div className='flex flex-col gap-7'>
                    <Mark variant='primary' text='Не более 10 устройств' />
                    <Mark variant='primary' text='Скорость до 10 Гбит/с' />
                    <Mark variant='primary' text='Приоритетная работа техподдержки' />
                  </div>
                </div>
                <Button variant='blue' href={"https://t.me/vpnhex_bot"}>
                  Узнать больше
                </Button>
              </div>
            </Card>
          </Section>

          <Section id='servers' title='Серверы по всему миру' subTitle='Постоянно расширяем <br/> возможности'>
            <Card className='cursor-default p-[37px]! text-center text-subtitle2' color='light'>
              Турция
            </Card>
            <Card className='cursor-default p-[37px]! text-center text-subtitle2' color='light'>
              Нидерланды
            </Card>
            <Card className='cursor-default p-[37px]! text-center text-subtitle2' color='light'>
              Германия
            </Card>
          </Section>

          <Section id='about' title='Полная безопасность' subTitle='Шифрование данных'>
            <Card color='light'>
              <div className='flex flex-col gap-7'>
                <p className='text-subtitle1'>Протокол VLESS</p>
                <p className='text-subtitle2'>
                  Легковесный транспортный протокол, который обеспечивает безопасную связь между клиентом
                  и&nbsp;сервером
                </p>
              </div>
            </Card>
            <Card color='light' className='h-[276px]! self-start'>
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
              <Button variant='accent' href={"https://t.me/vpnhex_bot"}>
                Попробовать
              </Button>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
