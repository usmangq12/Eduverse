import React from 'react'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

import { AlertCircle, CheckCircle2, FileText, Film, PlusCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "sonner"
import { FileUploader } from '../file-uploader'
import { createLesson } from '../../../actions/lesson-actions'


export const CreateCourseForm = ({params} : {params : string}) => {
      //  const courseId =  params;
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lessonType, setLessonType] = useState("video")
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    isPreview: false,
  })


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isPreview: checked }))
  }

  const handleFileUpload = (files: File[]) => {
    setUploadedFiles(files)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title) {
      toast(
        "Missing information",
       
      )
      return
    }

    if (uploadedFiles.length === 0) {
      toast( "No files uploaded",
       
      )
      return
    }

    setIsSubmitting(true)

    try {
      // In a real implementation, you would:
      // 1. Upload the files to a storage service (e.g., AWS S3, Vercel Blob)
      // 2. Get the URLs of the uploaded files
      // 3. Pass those URLs to the createLesson function

      // For this example, we'll simulate file URLs
    //   const fileUrls = uploadedFiles?.map(
    //     // (file, index) => `https://example.com/files/${params.courseId}/${Date.now()}-${index}-${file.name}`,
    //   )

      const result = await createLesson(
        params,
        {
          ...formData,
          lessonType,
        },
        // fileUrls,
      )

      if (result.success) {
        toast( "Lesson created"

        )
        router.push(`/teacher/courses/${params}`)
      } else {
        throw new Error(result.error || "Failed to create lesson")
      }
    } catch (error) {
      toast(
        error instanceof Error ? error.message : "Failed to create lesson",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
     <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Information</CardTitle>
              <CardDescription>Provide the basic details about this lesson</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Lesson Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Introduction to React Hooks"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Briefly describe what students will learn in this lesson"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    placeholder="15"
                    value={formData.duration}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lessonType">Lesson Type</Label>
                  <Select defaultValue={lessonType} onValueChange={setLessonType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select lesson type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video Lesson</SelectItem>
                      <SelectItem value="document">Document/PDF</SelectItem>
                      <SelectItem value="exercise">Exercise/Quiz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="isPreview" checked={formData.isPreview} onCheckedChange={handleSwitchChange} />
                <Label htmlFor="isPreview">Make this lesson available as a preview</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lesson Content</CardTitle>
              <CardDescription>Upload the content for this lesson</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={lessonType} value={lessonType} onValueChange={setLessonType} className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="video" className="flex items-center gap-2">
                    <Film className="h-4 w-4" />
                    Video
                  </TabsTrigger>
                  <TabsTrigger value="document" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Document
                  </TabsTrigger>
                  <TabsTrigger value="exercise" className="flex items-center gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Exercise
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="video">
                  <FileUploader
                    onFilesSelected={handleFileUpload}
                    accept=".mp4,.mov,.avi,.webm"
                    maxFiles={1}
                    maxSize={500} // 500MB
                    description="Upload your video lesson (MP4, MOV, AVI, WEBM)"
                  />
                </TabsContent>
                <TabsContent value="document">
                  <FileUploader
                    onFilesSelected={handleFileUpload}
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    maxFiles={3}
                    maxSize={50} // 50MB
                    description="Upload documents for this lesson (PDF, DOC, PPT)"
                  />
                </TabsContent>
                <TabsContent value="exercise">
                  <FileUploader
                    onFilesSelected={handleFileUpload}
                    accept=".pdf,.doc,.docx,.zip"
                    maxFiles={5}
                    maxSize={20} // 20MB
                    description="Upload exercise files or quizzes"
                  />
                </TabsContent>
              </Tabs>

              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Uploaded Files</h3>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted rounded-md">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <div className="flex-1">
                          <p className="font-medium truncate">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              Uploaded content must comply with our content policy. Make sure you have the rights to share all
              materials.
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push(`/teacher/courses/${params}`)}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Lesson"}
          </Button>
        </div>
      </form>
  )
}

