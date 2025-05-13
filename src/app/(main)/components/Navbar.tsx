import type React from "react";
import Link from "next/link";
import {
  Home,
  LayoutDashboard,
  BookOpen,
  Search,
  Bell,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Suspense } from "react";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/design3" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-emerald-500 flex items-center justify-center">
                <div className="h-4 w-4 rounded-sm bg-white/80"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">SolEdu</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/courses"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <BookOpen className="h-4 w-4" />
                My Courses
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-emerald-500 hidden md:block"></div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/design3"
                    className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900 p-2"
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    href="/design3/dashboard"
                    className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900 p-2"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/design3/courses"
                    className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900 p-2"
                  >
                    <BookOpen className="h-5 w-5" />
                    My Courses
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main>
        <Suspense fallback={<>Loading...</>}>{children}</Suspense>
      </main>
    </div>
  );
};
