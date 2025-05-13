"use client";

import type React from "react";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRef, useState } from "react";
import { Plus, Upload, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const basicInfoSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(100, { message: "Title must be less than 100 characters" }),
  category: z.string({ required_error: "Please select a category" }),
  level: z.string({ required_error: "Please select a level" }),
  timeCommitment: z.string({
    required_error: "Please select your time commitment",
  }),
  document: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      return !file || ACCEPTED_FILE_TYPES.includes(file.type);
    }, "File must be PNG or JPEG format"),
  learningOutcomes: z
    .array(
      z.object({
        outcome: z.string().min(5, {
          message: "Learning outcome must be at least 5 characters",
        }),
      })
    )
    .min(1, { message: "Add at least one learning outcome" }),
  requirements: z
    .string()
    .min(10, { message: "Requirements must be at least 10 characters" }),
});

export type BasicInfoFormValues = z.infer<typeof basicInfoSchema>;

interface BasicInfoFormProps {
  onSubmit: (data: BasicInfoFormValues) => void;
}

export default function BasicInfoForm({ onSubmit }: BasicInfoFormProps) {
  const fileReference = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState("");

  const form = useForm<BasicInfoFormValues>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      title: "",
      category: "",
      level: "",
      document: undefined,
      timeCommitment: "",
      learningOutcomes: [{ outcome: "" }],
      requirements: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "learningOutcomes",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFilename(file.name);
      form.setValue("document", file, { shouldValidate: true });
    } else {
      setFilename("");
      form.setValue("document", undefined);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Provide the essential details about your course
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Solana Smart Contract Development"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="solana">
                          Solana Development
                        </SelectItem>
                        <SelectItem value="smart-contracts">
                          Smart Contracts
                        </SelectItem>
                        <SelectItem value="defi">DeFi Applications</SelectItem>
                        <SelectItem value="nft">NFT Creation</SelectItem>
                        <SelectItem value="security">
                          Blockchain Security
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="timeCommitment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Time You Can Spend Creating Course Per Week
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select time commitment" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0-5">0-5 hours</SelectItem>
                      <SelectItem value="5-10">5-10 hours</SelectItem>
                      <SelectItem value="10-20">10-20 hours</SelectItem>
                      <SelectItem value="20+">20+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This helps us estimate your course completion timeline
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel className="text-base font-medium">
                What Will Students Learn From This Course?
              </FormLabel>
              <FormDescription className="mb-3">
                Add specific learning outcomes for your course
              </FormDescription>

              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2 mb-2">
                  <FormField
                    control={form.control}
                    name={`learningOutcomes.${index}.outcome`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder={`Learning outcome #${index + 1}`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => remove(index)}
                      className="flex-shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => append({ outcome: "" })}
              >
                <Plus className="h-4 w-4 mr-1" /> Add Learning Outcome
              </Button>
            </div>

            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Prerequisites/Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List any prerequisites or technical requirements for taking this course"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Include any prior knowledge, skills, or tools students need
                    before starting
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label>Course Thumbnail</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Drag and drop your thumbnail image here
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Recommended size: 1280x720px (16:9 ratio)
                </p>
                <FormField
                  control={form.control}
                  name="document"
                  render={({ field: {} }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <Input
                            className="hidden"
                            type="file"
                            multiple={false}
                            accept={ACCEPTED_FILE_TYPES.join(",")}
                            ref={fileReference}
                            onChange={handleFileChange}
                          />
                          {filename && (
                            <p className="text-sm text-gray-600 mb-2">
                              {filename}
                            </p>
                          )}
                          <Button
                            variant="outline"
                            type="button"
                            size="sm"
                            onClick={() => {
                              if (fileReference.current) {
                                fileReference.current.click();
                              }
                            }}
                          >
                            Browse Files
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormDescription>
                Accepted formats: PNG, JPEG, JPG (max 3MB)
              </FormDescription>
            </div>
          </CardContent>
          <div className="p-6 pt-0 flex justify-end">
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Save and Continue
            </Button>
          </div>
        </Card>
      </form>
    </Form>
  );
}
