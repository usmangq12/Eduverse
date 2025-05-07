"use client";

import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";
import { AppHeader } from "@/components/app-header";
import React from "react";
import { ClusterChecker } from "@/components/cluster/cluster-ui";
import { AccountChecker } from "@/components/account/account-ui";

import { BookOpen, Home, LayoutDashboard, LucideIcon } from "lucide-react";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const links: {
    label: string;
    path: string;
    Icon: LucideIcon;
  }[] = [
    { label: "Home", path: "/", Icon: Home },
    { label: "Dashboard", path: "/dashboard", Icon: LayoutDashboard },
    { label: "My Courses", path: "/courses", Icon: BookOpen },
  ];

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen bg-white">
        <AppHeader links={links} />
        <main className="flex-grow p-4 pb-0">
          <ClusterChecker>
            <AccountChecker />
          </ClusterChecker>
          {children}
        </main>
     
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
