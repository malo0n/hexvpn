import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex h-[82px] items-center justify-between border-b-[1px] border-[#BABCBF] bg-background px-[114px]'>
      <Link href='/'>
        <Image src={"/logo.svg"} priority alt='logo' className='w-auto' width={125} height={33}></Image>
      </Link>
      <div className='flex gap-[32px] text-subtitle2'>
        <Button variant={"link"} size={"sm"}>
          <Link href='/#subPlan'>Тарифы</Link>
        </Button>
        <Button variant={"link"} size={"sm"}>
          <Link href='/#servers'>Серверы</Link>
        </Button>
        <Button variant={"link"} size={"sm"}>
          <Link href='/#about'>О нас</Link>
        </Button>
      </div>
    </header>
  );
};
