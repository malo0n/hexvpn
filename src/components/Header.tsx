import Image from "next/image"

export const Header = () => {
  return (
    <header className="h-[82px] bg-background sticky top-0 flex justify-between z-50 px-[114px] border-b-[1px] border-[#BABCBF] items-center">
      <a href="#top">
        <Image src={"/logo.svg"} priority alt="logo" className="w-auto" width={125} height={33}></Image>
      </a>
      <div className="flex gap-[46px] text-subtitle2">
        <a href="#subPlan" className="hover:opacity-65 transition-all">Тарифы</a>
        <a href="#servers" className="hover:opacity-65 transition-all">Серверы</a>
        <a href="#about" className="hover:opacity-65 transition-all">О нас</a>
      </div>
    </header>
  )
}