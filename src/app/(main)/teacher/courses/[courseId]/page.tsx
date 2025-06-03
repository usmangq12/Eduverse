import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, FileText, Film, BookOpen, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getLessons } from "./actions/lesson-actions"

export default async function CoursePage({ params }: { params: { courseId: string } }) {

  const courseId = params.courseId


  const lessons = await getLessons(courseId)

  return (
    <div className="  py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Course Management</h1>
          <p className="text-muted-foreground">Manage your course content and lessons</p>
        </div>
        <Link href={`/teacher/courses/${courseId}/lessons/create`}>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Add Lesson
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Course Details</CardTitle>
            <CardDescription>Basic information about your course</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Course ID</h3>
                <p className="text-muted-foreground">{courseId}</p>
              </div>
              <div>
                <h3 className="font-medium">Total Lessons</h3>
                <p className="text-muted-foreground">{lessons.length}</p>
              </div>
              {/* In a real app, you would display more course details here */}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Lessons</CardTitle>
              <CardDescription>All lessons in this course</CardDescription>
            </div>
            <Link href={`/teacher/courses/${courseId}/lessons/create`}>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                New Lesson
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {lessons.length === 0 ? (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="font-medium text-lg mb-2">No lessons yet</h3>
                <p className="text-muted-foreground mb-4">Start creating lessons for your course</p>
                <Link href={`/teacher/courses/${courseId}/lessons/create`}>
                  <Button>Create Your First Lesson</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-start p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      {lesson.lessonType === "video" ? (
                        <Film className="h-5 w-5 text-primary" />
                      ) : (
                        <FileText className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{lesson.title}</h3>
                        <div className="flex items-center gap-2">
                          {lesson.isPreview && (
                            <Badge variant="outline" className="text-xs">
                              Preview
                            </Badge>
                          )}
                          {lesson.duration && (
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {lesson.duration} min
                            </div>
                          )}
                        </div>
                      </div>
                      {lesson.description && <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
