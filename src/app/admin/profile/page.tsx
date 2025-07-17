import type { Metadata } from "next"
import { ProfileForm } from "@/app/components/admin/profile-form"
import { getProfile } from "@/app/lib/data"

export const metadata: Metadata = {
  title: "Profile Management | Admin",
  description: "Manage your profile information",
}

export default async function AdminProfilePage() {
  const profile = await getProfile()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile Management</h1>
        <p className="text-muted-foreground">Update your personal information and profile details.</p>
      </div>

      <ProfileForm profile={profile} />
    </div>
  )
}
