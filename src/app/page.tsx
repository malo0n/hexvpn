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
    <div className="flex flex-col w-full">
      <Header />
      <div className="min-h-[100vh] px-[114px] py-[149px] flex flex-col gap-[205px]">
        <Main />
        <div className="flex flex-col gap-[140px]">
          <Section
            id="subPlan"
            title="Тарифы и планы"
            subTitle="Предоставляем доступные цены <br/> за наши услуги"
          >
            <Card color="light">
              <div className="flex gap-[73px] flex-col items-center">
                <div className="flex flex-col gap-[56px] items-center">
                  <div className="flex flex-col gap-7 items-center">
                    <p className="text-subtitle1">Базовый</p>
                    <p className="text-mainText">от 56 руб/мес</p>
                  </div>
                  <div className="flex flex-col gap-7">
                    <Mark variant="primary" text="Не более 3 устройств" />
                    <Mark variant="primary" text="Скорость до 1 Гбит/с" />
                  </div>
                </div>
                <Button variant="blue" href={"https://t.me/vpnhex_bot"}>
                  Узнать больше
                </Button>
              </div>
            </Card>
            <Card color="accent">
              <div className="flex gap-[97px] flex-col items-center">
                <div className="flex flex-col gap-[56px] items-center">
                  <div className="flex flex-col gap-7 items-center">
                    <p className="text-subtitle1 text-center">Пробный период</p>
                    <p className="text-mainText">0 руб/мес</p>
                  </div>
                  <div className="flex flex-col gap-7">
                    <Mark variant="secondary" text="7 дней пробного периода" />
                    <Mark variant="secondary" text="Не более 3 устройств" />
                    <Mark variant="secondary" text="Скорость до 1 Гбит/с" />
                  </div>
                </div>
                <Button variant="white" href={"https://t.me/vpnhex_bot"}>
                  Попробовать
                </Button>
              </div>
            </Card>
            <Card color="dark">
              <div className="flex gap-[94px] flex-col items-center">
                <div className="flex flex-col gap-[56px] items-center">
                  <div className="flex flex-col gap-7 items-center">
                    <p className="text-subtitle1 text-center">Премиум</p>
                    <p className="text-mainText">от 100 руб/мес</p>
                  </div>
                  <div className="flex flex-col gap-7">
                    <Mark variant="primary" text="Не более 10 устройств" />
                    <Mark variant="primary" text="Скорость до 10 Гбит/с" />
                    <Mark
                      variant="primary"
                      text="Приоритетная работа техподдержки"
                    />
                  </div>
                </div>
                <Button variant="blue" href={"https://t.me/vpnhex_bot"}>
                  Узнать больше
                </Button>
              </div>
            </Card>
          </Section>

          <Section
            id="servers"
            title="Сервера по всему миру"
            subTitle="Постоянно расширяем <br/> возможности"
          >
            <Card
              className="p-[37px] text-center text-subtitle2 cursor-default"
              color="light"
            >
              Турция
            </Card>
            <Card
              className="p-[37px] text-center text-subtitle2 cursor-default"
              color="light"
            >
              Нидерланды
            </Card>
            <Card
              className="p-[37px] text-center text-subtitle2 cursor-default"
              color="light"
            >
              Германия
            </Card>
          </Section>

          <Section
            id="about"
            title="Полная безопасность"
            subTitle="Шифрование данных"
          >
            <Card color="light">
              <div className="flex flex-col gap-7">
                <p className="text-subtitle1">Протокол VLESS</p>
                <p className="text-subtitle2">
                  Легковесный транспортный протокол, который обеспечивает
                  безопасную связь между клиентом и&nbsp;сервером
                </p>
              </div>
            </Card>
            <Card color="light" className="!h-[276px] self-start">
              <div className="flex flex-col gap-7 h-full">
                <p className="text-subtitle1">Анонимность</p>
                <p className="text-subtitle2">
                  Мы не сохраняем данные пользователей
                </p>
              </div>
            </Card>

            <Image
              src={"/hexFigure.svg"}
              priority
              width={1000}
              height={720}
              alt={"hexFigure"}
              className="absolute -left-[50%] -top-[120px] -z-40"
            ></Image>
          </Section>

          <Section
            id="bottom"
            title="Попробуйте бесплатно"
            subTitle="Неделя надежного VPN"
          >
            <div className="flex justify-center items-center w-full">
              <Button variant="accent" href={"https://t.me/vpnhex_bot"}>
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
