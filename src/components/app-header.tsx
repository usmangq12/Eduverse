"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  Menu, X } from "lucide-react";
import { ThemeSelect } from "@/components/theme-select";
import {
  ClusterButton,
  WalletButton,
} from "@/components/solana/solana-provider";
import { useWallet } from "@solana/wallet-adapter-react";
import { Routes } from "@/lib/routes";

export function AppHeader({
  links = [],
}: {
  links: {
    label: string;
    path: string;

  }[];
}) {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const { publicKey, disconnect, wallets } = useWallet();

  const wallet = useWallet?.();

  if (!wallet || !wallets) return null;

  const handleDisconnect = async () => {
    await disconnect();
    location.reload();
  };

  return (
    <header className="fixed w-full h-14 z-50 px-8 py-2 bg-neutral-100 border-b border-b-gray-400 pb-4 dark:bg-white dark:text-neutral-400">
      <div className="mx-auto flex justify-between items-center ">

        <div className="flex items-baseline gap-4">
          <div className="hidden md:flex items-center">
            <ul className="flex gap-5 flex-nowrap items-center">
              {links.map(({ label, path,  }) => (
                <li key={path}>
                  <Link
                    className={`hover:text-neutral-500 dark:hover:text-emerald-600 ${path === Routes.Home && "text-7xl"} ${pathname === path ? "text-neutral-500 dark:text-emerald-600" : "dark:text-gray-600"} `}
                    href={path}
                  >
                    <div className="flex gap-2 justify-center items-center">
                      <p className="text-sm">{label}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex gap-4 items-center">
          
            <Link href={`${Routes.SignUp}?type=teacher`} className="text-gray-600 hover:underline hover:underline-offset-4">Become a Teacher</Link>
       
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <X className="h-6 w-6 " />
            ) : (
              <Menu className="h-6 w-6 " />
            )}
          </Button>

          {/* Right section (wallet) */}
          <div className="hidden md:flex items-center gap-4">
            {publicKey && (
              <span className="text-xs text-gray-600 dark:text-gray-500">
                {publicKey.toBase58().slice(0, 4)}...
                {publicKey.toBase58().slice(-4)}
              </span>
            )}

            {wallets?.length ? <WalletButton size="sm"  label="Connect Wallet"/> : null}
            {publicKey && (
              <>
                <Button
                  variant="outline"
                  className="text-xs px-2 py-1"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </Button>
              </>
            )}
            <ClusterButton size="sm"   />
            <ThemeSelect />
          </div>

          {/* Mobile menu */}
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
                  {wallets?.length ? <WalletButton size="sm" /> : null}
                  <ClusterButton size="sm" />
                  <ThemeSelect />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
