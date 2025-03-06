import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
export const Footer = () => {
  const date = new Date();
  return (
    <footer className='sticky -bottom-[100%] z-50 flex h-fit flex-col items-start justify-between border-t-[1px] border-[#BABCBF] bg-background px-4 py-4 lg:flex-row lg:px-[64px] lg:py-8'>
      <div className='flex flex-col justify-start gap-[8px]'>
        <div className='flex h-fit gap-[24px]'>
          <p className='text-main-mobile'>
            ©{}
            {date.getFullYear()}HexVpn
          </p>
          <Link href='https://t.me/vpnhex_bot' className='size-5 transition-all hover:opacity-80 lg:size-6'>
            <Image src={"/telegramIcon.svg"} alt='telegram' width={24} height={24}></Image>
          </Link>
        </div>
        <Button variant='link' className='h-fit p-0! lg:mt-6' asChild>
          <Link href='/terms' className='px-0 transition-all hover:opacity-80'>
            Пользовательское соглашение
          </Link>
        </Button>
      </div>
      <Link href='https://t.me/malo0n' className='mt-4 text-main-mobile transition-all hover:opacity-80 lg:mt-0'>
        noNameStudio
      </Link>
    </footer>
  );
};
