import { NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import { Skill, Project, Experience, Message } from "@/app/lib/models"

export async function GET() {
  try {
    await dbConnect()

    const [skillsCount, projectsCount, experienceCount, messagesCount] = await Promise.all([
      Skill.countDocuments(),
      Project.countDocuments(),
      Experience.countDocuments(),
      Message.countDocuments(),
    ])

    return NextResponse.json({
      skillsCount,
      projectsCount,
      experienceCount,
      messagesCount,
    })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
