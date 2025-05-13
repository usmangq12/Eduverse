"use client"

import type React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

type PriceType = "free" | "paid";

const pricingSchema = z.object({
  priceType: z.enum(["free", "paid"]),
  price: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (val === undefined || val === "") return true
        return !isNaN(Number(val))
      },
      { message: "Price must be a number" },
    ),
  currency: z.string().optional(),
})

export type PricingFormValues = z.infer<typeof pricingSchema>

interface PricingFormProps {
  onSubmit: (data: PricingFormValues) => void
}

export default function PricingForm({ onSubmit }: PricingFormProps) {

  const [price, setPrice] = useState("49.99")

  const form = useForm<PricingFormValues>({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      priceType: "paid",
      price: "49.99",
      currency: "usd",
    },
  })

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const calculateFees = (price: string) => {
    const numPrice = Number.parseFloat(price) || 0
    const platformFee = numPrice * 0.15
    const transactionFee = 1.5
    const earnings = numPrice - platformFee - transactionFee

    return {
      platformFee: platformFee.toFixed(2),
      transactionFee: transactionFee.toFixed(2),
      earnings: earnings.toFixed(2),
    }
  }

  const fees = calculateFees(price)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Course Pricing</CardTitle>
            <CardDescription>Set the price for your course</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="priceType"
              render={({ field }) => (
                <FormItem>
                  <Tabs
                    defaultValue={field.value}
                    onValueChange={(value) => {
                      field.onChange(value as PriceType)
                
                    }}
                  >
                    <TabsList className="mb-4">
                      <TabsTrigger value="paid">Paid Course</TabsTrigger>
                      <TabsTrigger value="free">Free Course</TabsTrigger>
                    </TabsList>
                    <TabsContent value="paid" className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price (USD)</FormLabel>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                <FormControl>
                                  <Input
                                    className="pl-7"
                                    placeholder="49.99"
                                    {...field}
                                    onChange={(e) => {
                                      field.onChange(e)
                                      handlePriceChange(e)
                                    }}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="currency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Currency</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger id="course-currency">
                                    <SelectValue placeholder="Select currency" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="usd">USD ($)</SelectItem>
                                  <SelectItem value="sol">SOL</SelectItem>
                                  <SelectItem value="usdc">USDC</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-medium mb-2">Price Breakdown</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Your Price</span>
                            <span>${price || "0.00"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Platform Fee (15%)</span>
                            <span>-${fees.platformFee}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Transaction Fee</span>
                            <span>-${fees.transactionFee}</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-medium">
                            <span>Your Earnings Per Sale</span>
                            <span className="text-emerald-600">${fees.earnings}</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="free">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 mb-2">
                          Your course will be available for free to all students. This is a great way to build your
                          audience and showcase your expertise.
                        </p>
                        <p className="text-sm text-gray-500">
                          Note: You can change your course from free to paid later, but not from paid to free.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </FormItem>
              )}
            />
          </CardContent>
          <div className="p-6 pt-0 flex justify-end">
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Save and Continue
            </Button>
          </div>
        </Card>
      </form>
    </Form>
  )
}
