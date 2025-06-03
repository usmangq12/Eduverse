import { type NextRequest, NextResponse } from "next/server"

// This would typically connect to your database
// For demo purposes, we're using a simple in-memory store
const lessonsStore: Record<string, any[]> = {}

export async function GET(request: NextRequest, { params }: { params: { courseId: string } }) {
  const courseId = params.courseId

  // Return lessons for this course, or empty array if none exist
  const lessons = lessonsStore[courseId] || []

  return NextResponse.json({ lessons })
}

export async function POST(request: NextRequest, { params }: { params: { courseId: string } }) {
  const courseId = params.courseId
  const data = await request.json()

  // Validate required fields
  if (!data.title) {
    return NextResponse.json({ error: "Lesson title is required" }, { status: 400 })
  }

  // Create a new lesson with a unique ID
  const newLesson = {
    id: `lesson_${Date.now()}`,
    courseId,
    createdAt: new Date().toISOString(),
    ...data,
  }

  // Add to our store
  if (!lessonsStore[courseId]) {
    lessonsStore[courseId] = []
  }

  lessonsStore[courseId].push(newLesson)

  return NextResponse.json({ lesson: newLesson }, { status: 201 })
}
