"use client";
import { useDeviceWidth } from "@/lib/useDeviceWidth";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

export const Header = () => {
  const deviceWidth = useDeviceWidth();
  const [openSideMenu, setOpenSideMenu] = useState(false);

  if (!deviceWidth) {
    return null;
  }

  return (
    <header className='sticky top-0 z-50 flex h-[64px] items-center justify-between border-b-[1px] border-[#BABCBF] bg-background px-4 lg:h-[82px] lg:px-[64px]'>
      <Link href='/'>
        <Image src={"/logo.svg"} priority alt='logo' className='w-auto' width={125} height={33}></Image>
      </Link>
      {deviceWidth > 768 ? (
        <div className='flex gap-0 md:text-main-mobile lg:gap-[32px] lg:text-subtitle2'>
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
      ) : (
        <AnimatePresence>
          <Image
            src={"/hamburger.svg"}
            alt='hamburger'
            key={"hamburger"}
            width={24}
            height={24}
            onClick={() => setOpenSideMenu(!openSideMenu)}
          ></Image>
          {openSideMenu && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: openSideMenu ? 1 : 0 }}
                exit={{ opacity: 0 }}
                className='absolute top-[64px] left-0 z-50 block h-[100dvh] w-[100dvw] bg-secondary/70'
                onClick={() => setOpenSideMenu(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                drag='x'
                dragConstraints={{ left: 0 }}
                dragMomentum={false}
                dragElastic={0}
                onDragEnd={(event, info) => {
                  if (info.offset.x > 40 && openSideMenu) {
                    setOpenSideMenu(false);
                  } else {
                    event.stopPropagation();
                    event.preventDefault();
                  }
                }}
                transition={{ type: "spring", stiffness: 170, damping: 23, mass: 0.8 }}
                className='fixed top-[64px] right-0 z-50 h-[93dvh] w-3/4 max-w-xs bg-background px-6 py-5 text-white shadow-[4px_4px_16px_0_rgba(53,53,53,0.2)]'
              >
                <div className='flex flex-col items-center gap-4'>
                  <Link
                    href={`/#subPlan`}
                    onClick={() => setOpenSideMenu(false)}
                    className={`flex w-full items-center gap-[8px] py-[8px] text-main-mobile text-black transition-all hover:opacity-90 ${location.pathname === `/#subPlan` ? "!text-accent" : ""}`}
                  >
                    Тарифы
                  </Link>
                  <Link
                    href={`/#servers`}
                    onClick={() => setOpenSideMenu(false)}
                    className={`flex w-full items-center gap-[8px] py-[8px] text-main-mobile text-black transition-all hover:opacity-90 ${location.pathname === `/#servers` ? "!text-accent" : ""}`}
                  >
                    Серверы
                  </Link>
                  <Link
                    href={`/#about`}
                    onClick={() => setOpenSideMenu(false)}
                    className={`flex w-full items-center gap-[8px] py-[8px] text-main-mobile text-black transition-all hover:opacity-90 ${location.pathname === `/#about` ? "!text-accent" : ""}`}
                  >
                    О нас
                  </Link>
                  <div className={`block h-[1px] min-h-[1px] w-full rounded-full bg-black/80`} />
                  <Link
                    href={`/terms`}
                    onClick={() => setOpenSideMenu(false)}
                    className={`flex w-full items-center gap-[8px] py-[8px] text-main-mobile text-black transition-all hover:opacity-90 ${location.pathname === `/terms` ? "!text-accent" : ""}`}
                  >
                    Пользовательское соглашение
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};
