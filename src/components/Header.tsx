import Image from "next/image";

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex h-[82px] items-center justify-between border-b-[1px] border-[#BABCBF] bg-background px-[114px]'>
      <a href='#top'>
        <Image src={"/logo.svg"} priority alt='logo' className='w-auto' width={125} height={33}></Image>
      </a>
      <div className='flex gap-[46px] text-subtitle2'>
        <a href='#subPlan' className='transition-all hover:opacity-65'>
          Тарифы
        </a>
        <a href='#servers' className='transition-all hover:opacity-65'>
          Серверы
        </a>
        <a href='#about' className='transition-all hover:opacity-65'>
          О нас
        </a>
      </div>
    </header>
  );
};
