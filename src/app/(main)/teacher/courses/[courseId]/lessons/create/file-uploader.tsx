"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { UploadCloud, X, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void
  accept: string
  maxFiles: number
  maxSize: number
  description: string
}

export function FileUploader({ onFilesSelected, accept, maxFiles, maxSize, description }: FileUploaderProps) {
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null)
      if (files.length + acceptedFiles.length > maxFiles) {
        setError(`You can only upload up to ${maxFiles} file${maxFiles === 1 ? "" : "s"}`)
        return
      }

      const oversizedFiles = acceptedFiles.filter((file) => file.size > maxSize * 1024 * 1024)

      if (oversizedFiles.length > 0) {
        setError(`Some files exceed the ${maxSize}MB size limit`)
        return
      }

      const updatedFiles = [...files, ...acceptedFiles]
      setFiles(updatedFiles)
      onFilesSelected(updatedFiles)
      console.log("Accepted files:", updatedFiles);
    },
  
    [files, maxFiles, maxSize, onFilesSelected],
  )

  const removeFile = (index: number) => {
    const updatedFiles = [...files]
    updatedFiles.splice(index, 1)
    setFiles(updatedFiles)
    onFilesSelected(updatedFiles)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.split(",").reduce(
      (acc, curr) => {
        acc[curr] = []
        return acc
      },
      {} as Record<string, string[]>,
    ),
    maxFiles,
  })

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/50"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2">
          <UploadCloud className="h-10 w-10 text-muted-foreground" />
          <h3 className="font-medium text-lg">Drag & drop files here</h3>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">{description}</p>
          <p className="text-xs text-muted-foreground">
            Max {maxFiles} file{maxFiles === 1 ? "" : "s"}, up to {maxSize}MB each
          </p>
          <Button type="button" variant="outline" size="sm" className="mt-2">
            Browse Files
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
              <div className="flex-1 truncate">
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={() => removeFile(index)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Remove file</span>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
