"use client";

import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";
import { AppHeader } from "@/components/app-header";
import React from "react";
import { ClusterChecker } from "@/components/cluster/cluster-ui";
import { AccountChecker } from "@/components/account/account-ui";
import { Routes } from "@/lib/routes";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const loginUser = "teacher";
  const links: {
    label: string;
    path: string;
  }[] = [
    { label: "Eduverse", path: Routes.Home },
    {
      label: " Dashboard",
      path:
        loginUser === "teacher" ? "/teacher/dashboard" : "/student/dashboard",
    },
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
        <main className="flex-grow p-4 pb-0 pt-16">
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
