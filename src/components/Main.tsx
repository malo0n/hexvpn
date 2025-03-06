import Image from "next/image";
import HexAnimation from "./animations/hexFigure";

export const Main = () => {
  return (
    <div className='flex w-fit flex-col gap-6 pt-[52px] pl-3 md:gap-8 md:pt-[116px] md:pl-[32px] lg:gap-[54px] lg:pt-[149px] lg:pl-[64px]'>
      <p className='min-w-fit text-subtitle1 md:text-title-h2 lg:text-title-h1'>
        VPN, который
        <br />
        работает в&nbsp;России
      </p>
      <p className='text-main-mobile leading-[120%] font-normal md:text-subtitle2 lg:text-subtitle1'>
        Безопасный и стабильный VPN. <br />
        Без рекламы.
      </p>
      <div className='flex items-end gap-4 lg:gap-8'>
        <Image src={"/windowsIcon.svg"} width={43} height={43} className='h-auto w-7 md:w-8 lg:w-10' alt={"windows"} />
        <Image src={"/appleIcon.png"} width={37} height={45} className='h-auto w-6 md:w-7 lg:w-9' alt={"apple"} />
        <Image src={"/androidIcon.svg"} width={53} height={30} className='h-auto w-8 md:w-10 lg:w-12' alt={"android"} />
      </div>

      <div className='absolute top-[230px] right-0 -z-0 md:top-[140px] lg:top-[120px]'>
        <HexAnimation></HexAnimation>
      </div>
    </div>
  );
};
