"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Plus, Video, FileText, Code, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CurriculumForm = {
  sections: {
    title: string;
    lessons: {
      id: number;
      title: string;
      type: string;
      duration: string;
    }[];
  }[];
};

const curriculumSchema = z.object({
  sections: z.array(z.string()).optional(),
  sectionTitle: z
    .string()
    .min(3, "Section title must be at least 3 characters")
    .optional(),
  lessonTitle: z
    .string()
    .min(3, "Lesson title must be at least 3 characters")
    .optional(),
  lessonType: z.string().optional(),
  lessonDuration: z.string().optional(),
});

export type CurriculumFormValues = z.infer<typeof curriculumSchema>;

interface CurriculumFormProps {
  onSubmit: (data: CurriculumFormValues) => void;
}

export default function CurriculumForm({ onSubmit }: CurriculumFormProps) {
  const [sections, setSections] = useState<
    {
      id: number;
      title: string;
      lessons: {
        id: number;
        title: string;
        type: string;
        duration: string;
      }[];
    }[]
  >([]);

  const form = useForm<CurriculumFormValues>({
    resolver: zodResolver(curriculumSchema),
    defaultValues: {
      sections: [],
      sectionTitle: "",
      lessonTitle: "",
      lessonType: "video",
      lessonDuration: "",
    },
  });

  const addSection = () => {
    const sectionTitle = form.getValues("sectionTitle");
    if (!sectionTitle) return;

    const newSectionId = sections.length + 1;
    setSections([
      ...sections,
      {
        id: newSectionId,
        title: sectionTitle,
        lessons: [],
      },
    ]);
    form.setValue("sectionTitle", "");
  };

  const addLesson = (sectionId: number) => {
    const lessonTitle = form.getValues("lessonTitle");
    const lessonType = form.getValues("lessonType") || "video";
    const lessonDuration = form.getValues("lessonDuration");

    if (!lessonTitle || !lessonDuration) return;

    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          const newLessonId = section.lessons.length + 1;
          return {
            ...section,
            lessons: [
              ...section.lessons,
              {
                id: newLessonId,
                title: lessonTitle,
                type: lessonType,
                duration: lessonDuration,
              },
            ],
          };
        }
        return section;
      })
    );
    form.setValue("lessonTitle", "");
    form.setValue("lessonDuration", "");
  };

  const removeSection = (sectionId: number) => {
    setSections(sections.filter((section) => section.id !== sectionId));
  };

  const removeLesson = (sectionId: number, lessonId: number) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lessons: section.lessons.filter((lesson) => lesson.id !== lessonId),
          };
        }
        return section;
      })
    );
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5 text-gray-400" />;
      case "article":
        return <FileText className="h-5 w-5 text-gray-400" />;
      case "exercise":
        return <Code className="h-5 w-5 text-gray-400" />;
      default:
        return <Video className="h-5 w-5 text-gray-400" />;
    }
  };

  // const handleFormSubmit = (data: CurriculumFormValues) => {
  //   const formattedData = {
  //     ...data,
  //     sections: sections.map((section) => ({
  //       title: section.title,
  //       lessons: section.lessons,
  //     })),
  //   }
  //   onSubmit(formattedData   )
  // }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Course Curriculum</CardTitle>
            <CardDescription>
              Organize your course content into sections and lessons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Add new section inputs */}
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-medium">Add New Section</h3>
              <FormField
                control={form.control}
                name="sectionTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Section Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Introduction to Solana"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" onClick={addSection} className="mt-2">
                <Plus className="h-4 w-4 mr-1" /> Add Section
              </Button>
            </div>

            {/* Add new lesson inputs */}
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-medium">Add New Lesson</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="lessonTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lesson Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Welcome and Course Overview"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lessonType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lesson Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select lesson type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="exercise">
                            Coding Exercise
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lessonDuration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 5:30 or 10 min read"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-2">
                  Select a section to add this lesson to:
                </p>
                {sections.length > 0 ? (
                  <div className="space-y-2">
                    {sections.map((section) => (
                      <Button
                        key={section.id}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addLesson(section.id)}
                        className="mr-2"
                      >
                        Add to: {section.title}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-amber-600">
                    Please add a section first
                  </p>
                )}
              </div>
            </div>

            {/* Display sections and lessons */}
            {sections.length > 0 ? (
              sections.map((section) => (
                <div
                  key={section.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <div className="bg-gray-50 p-4 flex items-center justify-between">
                    <div className="font-medium">{section.title}</div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => removeSection(section.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    {section.lessons.length > 0 ? (
                      section.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center gap-3 p-3 border rounded-md"
                        >
                          {getLessonIcon(lesson.type)}
                          <div className="flex-1">
                            <div className="font-medium">{lesson.title}</div>
                            <div className="text-sm text-gray-500">
                              {lesson.type === "video"
                                ? `Video • ${lesson.duration}`
                                : lesson.type === "article"
                                  ? `Article • ${lesson.duration}`
                                  : `Coding Exercise • ${lesson.duration}`}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeLesson(section.id, lesson.id)}
                            className="text-red-500"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                        No lessons added yet
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-8 border border-dashed rounded-lg">
                <p className="text-gray-500">
                  No sections added yet. Add your first section above.
                </p>
              </div>
            )}
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
