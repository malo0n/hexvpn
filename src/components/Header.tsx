import Image from "next/image";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex h-[82px] items-center justify-between border-b-[1px] border-[#BABCBF] bg-background px-[114px]'>
      <a href='#top'>
        <Image src={"/logo.svg"} priority alt='logo' className='w-auto' width={125} height={33}></Image>
      </a>
      <div className='flex gap-[32px] text-subtitle2'>
        <Button variant={"link"} size={"sm"}>
          <a href='#subPlan'>Тарифы</a>
        </Button>
        <Button variant={"link"} size={"sm"}>
          <a href='#servers'>Серверы</a>
        </Button>
        <Button variant={"link"} size={"sm"}>
          <a href='#about'>О нас</a>
        </Button>
      </div>
    </header>
  );
};
