"use client";
import { usePathname } from "next/navigation";
import {  useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideIcon, Menu, X } from "lucide-react";
import { ThemeSelect } from "@/components/theme-select";
import {
  ClusterButton,
  WalletButton,
} from "@/components/solana/solana-provider";

export function AppHeader({
  links = [],
}: {
  links: {
    label: string;
    path: string;
    Icon: LucideIcon;
  }[];
}) {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);


  return (
    <header className="fixed w-full h-14 z-50 px-8 py-2 bg-neutral-100 border-b border-b-gray-400 pb-4 dark:bg-white dark:text-neutral-400">
      <div className="mx-auto flex justify-between items-center ">
        <div className="flex items-baseline gap-4">
          <div className="hidden md:flex items-center">
            <ul className="flex gap-5 flex-nowrap items-center">
              {links.map(({ label, path,Icon }) => (
                <li key={path}>
                  <Link
                    className={`hover:text-neutral-500  dark:hover:text-emerald-600 ${pathname === path ? "text-neutral-500 dark:text-emerald-600" : "dark:text-gray-600"}`}
                    href={path}
                  >
                   <div className="flex gap-2 justify-center items-center">
                     <Icon className="w-5 h-5"/>
                   <p>{label}</p>
                   </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X className="h-6 w-6 "  /> : <Menu className="h-6 w-6 " />}
        </Button>

        <div className="hidden md:flex items-center gap-4">
          <WalletButton size="sm" />
          <ClusterButton size="sm" />
          <ThemeSelect />
        </div>

        {showMenu && (
          <div className="md:hidden fixed inset-x-0 top-[52px] bottom-0 bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-sm">
            <div className="flex flex-col p-4 gap-4 border-t dark:border-neutral-800">
              <ul className="flex flex-col gap-4">
                {links.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      className={`hover:text-neutral-500 dark:hover:text-white block text-lg py-2  ${pathname === path ? "text-neutral-500 dark:text-white" : ""} `}
                      href={path}
                      onClick={() => setShowMenu(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <WalletButton size="sm" />
                <ClusterButton size="sm" />
                <ThemeSelect />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
