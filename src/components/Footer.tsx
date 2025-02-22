import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
export const Footer = () => {
  const date = new Date();
  return (
    <footer className='sticky -bottom-[100%] z-50 flex h-fit items-start justify-between border-t-[1px] border-[#BABCBF] bg-background px-[114px] py-8'>
      <div className='flex flex-col justify-start gap-[8px]'>
        <div className='flex h-fit gap-[24px]'>
          <p className='text-subtitle2'>
            ©{}
            {date.getFullYear()}HexVpn
          </p>
          <Link href='https://t.me/vpnhex_bot' className='transition-all hover:opacity-80'>
            <Image src={"/telegramIcon.svg"} alt='telegram' width={24} height={24}></Image>
          </Link>
        </div>
        <Button variant='link' className='mt-6 h-fit p-0' asChild>
          <Link href='/terms' className='transition-all hover:opacity-80'>
            Пользовательское соглашение
          </Link>
        </Button>
      </div>
      <Link href='https://t.me/malo0n' className='text-subtitle2 transition-all hover:opacity-80'>
        @noNameStudio
      </Link>
    </footer>
  );
};
