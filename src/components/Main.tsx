import Image from "next/image"
import { Button } from "./ui/button"

export const Main = () => {
  return (
    <div className="flex flex-col pl-[114px] pt-[149px] gap-[56px]  w-fit">
      <div className="flex flex-col gap-[54px]">
        <p className="text-titleH1 min-w-fit">VPN, который<br/>работает&nbsp;в&nbsp;России</p>
        <p className="text-subtitle1 font-normal leading-[120%]">Безопасный и стабильный VPN. <br/>
        Без рекламы.</p>
      </div>
      <div className="flex gap-8 items-end">
        <Image src={"/windowsIcon.svg"} width={43} height={43} className="h-auto" alt={"windows"}/>
        <Image src={"/appleIcon.png"} width={37} height={45} className="h-auto" alt={"apple"}/>
        <Image src={"/androidIcon.svg"} width={53} height={30} className="h-auto" alt={"android"}/>
        <Button variant={"default"} className="" >Узнать больше</Button>
      </div>

      <Image src={"/hexFigure.svg"} width={800} height={720} alt={"hexFigure"} priority className="absolute right-0 top-[120px] w-[45vw]"></Image>
    </div>
  )
}