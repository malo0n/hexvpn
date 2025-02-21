import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  const date = new Date();
  return (
    <footer className='z-50 flex h-[82px] items-center justify-between border-t-[1px] border-[#BABCBF] bg-background px-[114px]'>
      <div className='flex h-fit gap-[24px]'>
        <p className='text-subtitle2'>
          ©{}
          {date.getFullYear()}HexVpn
        </p>
        <Link href='https://t.me/vpnhex_bot' className='transition-all hover:opacity-80'>
          <Image src={"/telegramIcon.svg"} alt='telegram' width={24} height={24}></Image>
        </Link>
      </div>
      <Link href='https://t.me/malo0n' className='text-subtitle2 transition-all hover:opacity-80'>
        @noNameStudio
      </Link>
    </footer>
  );
};
