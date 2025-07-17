"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { LayoutDashboard, User, Code, Briefcase, FolderOpen, Mail, LogOut } from "lucide-react"

export function AdminSidebar() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
  }

  const menuItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/profile", icon: User, label: "Profile" },
    { href: "/admin/skills", icon: Code, label: "Skills" },
    { href: "/admin/projects", icon: FolderOpen, label: "Projects" },
    { href: "/admin/experience", icon: Briefcase, label: "Experience" },
    { href: "/admin/messages", icon: Mail, label: "Messages" },
  ]

  return (
    <div className="w-64 bg-card border-r p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button variant="ghost" className="w-full justify-start">
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
        <Button variant="ghost" className="w-full justify-start text-red-600" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </nav>
    </div>
  )
}
