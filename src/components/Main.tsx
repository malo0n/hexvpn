import Image from "next/image";
import { Button } from "./ui/button";

export const Main = () => {
  return (
    <div className='flex w-fit flex-col gap-[56px] pt-[149px] pl-[114px]'>
      <div className='flex flex-col gap-[54px]'>
        <p className='min-w-fit text-title-h1'>
          VPN, который
          <br />
          работает&nbsp;в&nbsp;России
        </p>
        <p className='text-subtitle1 leading-[120%] font-normal'>
          Безопасный и стабильный VPN. <br />
          Без рекламы.
        </p>
      </div>
      <div className='flex items-end gap-8'>
        <Image src={"/windowsIcon.svg"} width={43} height={43} className='h-auto' alt={"windows"} />
        <Image src={"/appleIcon.png"} width={37} height={45} className='h-auto' alt={"apple"} />
        <Image src={"/androidIcon.svg"} width={53} height={30} className='h-auto' alt={"android"} />
        <Button variant={"outline"}>Узнать больше</Button>
      </div>

      <Image
        src={"/hexFigure.svg"}
        width={800}
        height={720}
        alt={"hexFigure"}
        priority
        className='absolute top-[120px] right-0 w-[45vw]'
      ></Image>
    </div>
  );
};
