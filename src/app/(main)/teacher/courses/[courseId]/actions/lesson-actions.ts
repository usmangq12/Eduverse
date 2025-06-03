"use server"

import { revalidatePath } from "next/cache"

type LessonFormData = {
  title: string
  description?: string
  duration?: string
  lessonType: string
  isPreview?: boolean
  position?: number
}

export async function createLesson(courseId: string, formData: LessonFormData, fileUrls: string[]) {
  try {
    // In a real implementation, you would:
    // 1. Validate the input data
    // 2. Connect to your database
    // 3. Create the lesson record
    // 4. Associate the uploaded files with the lesson

    // For this example, we'll use the API route we created
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/courses/${courseId}/lessons`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          files: fileUrls,
        }),
      },
    )

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to create lesson")
    }

    // Revalidate the course page to show the new lesson
    revalidatePath(`/teacher/courses/${courseId}`)

    return { success: true }
  } catch (error) {
    console.error("Error creating lesson:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create lesson",
    }
  }
}

export async function getLessons(courseId: string) {
  try {
    // In a real implementation, you would fetch from your database
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/courses/${courseId}/lessons`,
    )

    if (!response.ok) {
      throw new Error("Failed to fetch lessons")
    }

    const data = await response.json()
    return data.lessons
  } catch (error) {
    console.error("Error fetching lessons:", error)
    return []
  }
}
