import type React from "react";
import { CreateCourseForm } from "./components/CreateCourseForm";

export default async function CreateLessonPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  return (
    <div className=" py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add New Lesson</h1>
        <p className="text-muted-foreground">
          Upload content for your course: {courseId}
        </p>
      </div>
      <CreateCourseForm params={courseId} />
    </div>
  );
}
