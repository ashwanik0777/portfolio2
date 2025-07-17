"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Button } from "@/app/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import type { ProfileType } from "@/app/lib/types"

const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  title: z.string().min(2, { message: "Title must be at least 2 characters" }),
  shortBio: z.string().min(10, { message: "Short bio must be at least 10 characters" }),
  bio: z.string().min(20, { message: "Bio must be at least 20 characters" }),
  currentWork: z.string().min(10, { message: "Current work must be at least 10 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Phone number must be at least 7 characters" }),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }),
  experience: z.string(),
  education: z.string(),
  roles: z.string().refine(
    (roles) => {
      try {
        return JSON.parse(roles).length > 0
      } catch {
        return false
      }
    },
    { message: "Please enter valid JSON array of roles" },
  ),
  image: z.string().url({ message: "Please enter a valid image URL" }),
  aboutImage: z.string().url({ message: "Please enter a valid about image URL" }),
})

type ProfileFormValues = z.infer<typeof profileSchema>

interface ProfileFormProps {
  profile: ProfileType | null
}

export function ProfileForm({ profile }: ProfileFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const defaultValues: Partial<ProfileFormValues> = {
    name: profile?.name || "",
    title: profile?.title || "",
    shortBio: profile?.shortBio || "",
    bio: profile?.bio || "",
    currentWork: profile?.currentWork || "",
    email: profile?.email || "",
    phone: profile?.phone || "",
    location: profile?.location || "",
    experience: profile?.experience || "",
    education: profile?.education || "",
    roles: profile?.roles ? JSON.stringify(profile.roles) : "[]",
    image: profile?.image || "",
    aboutImage: profile?.aboutImage || "",
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  })

  const onSubmit = async (data: ProfileFormValues) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/profile", {
        method: profile ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          roles: JSON.parse(data.roles),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save profile")
      }

      toast({
        title: "Success",
        description: "Profile has been saved successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" {...register("name")} className={errors.name ? "border-destructive" : ""} />
              {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Professional Title
              </label>
              <Input id="title" {...register("title")} className={errors.title ? "border-destructive" : ""} />
              {errors.title && <p className="text-destructive text-xs">{errors.title.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <Input id="phone" {...register("phone")} className={errors.phone ? "border-destruct" : ""} />
              {errors.phone && <p className="text-destructive text-xs">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <Input id="location" {...register("location")} className={errors.location ? "border-destructive" : ""} />
              {errors.location && <p className="text-destructive text-xs">{errors.location.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">
                Experience
              </label>
              <Input id="experience" {...register("experience")} placeholder="e.g., 5+ years" />
            </div>

            <div className="space-y-2">
              <label htmlFor="education" className="text-sm font-medium">
                Education
              </label>
              <Input id="education" {...register("education")} placeholder="e.g., Bachelor's in Computer Science" />
            </div>

            <div className="space-y-2">
              <label htmlFor="roles" className="text-sm font-medium">
                Roles (JSON Array)
              </label>
              <Input
                id="roles"
                {...register("roles")}
                placeholder='["Web Developer", "Designer"]'
                className={errors.roles ? "border-destructive" : ""}
              />
              {errors.roles && <p className="text-destructive text-xs">{errors.roles.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="shortBio" className="text-sm font-medium">
              Short Bio
            </label>
            <Textarea
              id="shortBio"
              rows={3}
              {...register("shortBio")}
              className={errors.shortBio ? "border-destructive" : ""}
            />
            {errors.shortBio && <p className="text-destructive text-xs">{errors.shortBio.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="bio" className="text-sm font-medium">
              Full Bio
            </label>
            <Textarea id="bio" rows={5} {...register("bio")} className={errors.bio ? "border-destructive" : ""} />
            {errors.bio && <p className="text-destructive text-xs">{errors.bio.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="currentWork" className="text-sm font-medium">
              Current Work
            </label>
            <Textarea
              id="currentWork"
              rows={3}
              {...register("currentWork")}
              className={errors.currentWork ? "border-destructive" : ""}
            />
            {errors.currentWork && <p className="text-destructive text-xs">{errors.currentWork.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium">
                Profile Image URL
              </label>
              <Input
                id="image"
                {...register("image")}
                placeholder="https://example.com/image.jpg"
                className={errors.image ? "border-destructive" : ""}
              />
              {errors.image && <p className="text-destructive text-xs">{errors.image.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="aboutImage" className="text-sm font-medium">
                About Image URL
              </label>
              <Input
                id="aboutImage"
                {...register("aboutImage")}
                placeholder="https://example.com/about-image.jpg"
                className={errors.aboutImage ? "border-destructive" : ""}
              />
              {errors.aboutImage && <p className="text-destructive text-xs">{errors.aboutImage.message}</p>}
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Profile"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
