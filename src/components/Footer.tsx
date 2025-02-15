import Image from "next/image"
import Link from "next/link"
export const Footer = () => {
  return (
    <footer className="h-[82px] items-center border-t-[1px] border-[#BABCBF] bg-background flex justify-between px-[114px] z-50">
      <div className="flex gap-[24px] h-fit">
        <p className="text-subtitle2">©2025HexVpn</p>
        <Link href="https://t.me/vpnhex_bot" className="hover:opacity-80 transition-all">
          <Image src={"/telegramIcon.svg"} alt="telegram" width={24} height={24}></Image>
        </Link>
      </div>
      <Link href="https://t.me/malo0n" className="text-subtitle2 hover:opacity-80 transition-all">@noNameStudio</Link>
    </footer>
  )
}