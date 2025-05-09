'use client'
import { Button } from '@/components/ui/button'
import { Wallet } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const DashboardNavbar = ({walletAddress} : {walletAddress:string}) => {
    const router  = useRouter();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
    <div>
      <h1 className="text-3xl font-bold dark:text-gray-600">My Learning Dashboard</h1>
      <p className="text-gray-500">Track your progress and manage your courses</p>
    </div>
    <div className="flex items-center gap-2">
      <Button variant="outline" className="flex items-center gap-2">
        <Wallet className="h-4 w-4" />
        <span className="hidden sm:inline">Connected:</span>
        <span className="font-mono text-xs truncate max-w-[80px] sm:max-w-[120px]">{walletAddress}</span>
      </Button>
      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={()=>{router.push("/start-learning")}} >Browse Courses</Button>
    </div>
  </div>
  )
}


