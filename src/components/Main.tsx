import Image from "next/image"

export const Main = () => {
  return (
    <div className="flex flex-col justify-between h-[465px] w-[660px]">
      <div className="flex flex-col gap-[54px]">
        <p className="text-titleH1">VPN, который работает в России</p>
        <p className="text-subtitle1 font-normal leading-[120%]">Безопасный и стабильный VPN. <br/>
        Без рекламы.</p>
      </div>
      <div className="flex gap-8 items-end">
        <Image src={"/windowsIcon.svg"} width={43} height={43} className="h-auto" alt={"windows"}/>
        <Image src={"/appleIcon.png"} width={37} height={45} className="h-auto" alt={"apple"}/>
        <Image src={"/androidIcon.svg"} width={53} height={30} className="h-auto" alt={"android"}/>
      </div>

      <Image src={"/hexFigure.svg"} width={1000} height={720} alt={"hexFigure"} priority className="absolute -right-[240px] top-[120px] w-auto"></Image>
    </div>
  )
}