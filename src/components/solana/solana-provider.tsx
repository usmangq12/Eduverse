"use client";

import dynamic from "next/dynamic";
import {
  createSolanaDevnet,
  createSolanaLocalnet,
  createWalletUiConfig,
  WalletUi,
} from "@wallet-ui/react";
import "@wallet-ui/tailwind/index.css";
import React, { FC, ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets"; 
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import type { WalletAdapter } from "@solana/wallet-adapter-base";

interface SolanaProviderProps {
  children: ReactNode;
}

export const WalletButton = dynamic(
  async () => (await import("@wallet-ui/react")).WalletUiDropdown,
  {
    ssr: false,
    loading: () => <span>Loading...</span>, 
  }
);
export const ClusterButton = dynamic(
  async () => (await import("@wallet-ui/react")).WalletUiClusterDropdown,
  {
    ssr: false,
    loading: () => <span>Loading...</span>, 
  }
);

const config = createWalletUiConfig({
  clusters: [createSolanaDevnet(), createSolanaLocalnet()],
});

export const SolanaProvider: FC<SolanaProviderProps> = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets: WalletAdapter[] = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (

    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <WalletUi config={config}>
          {children}
        </WalletUi>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  );
};
