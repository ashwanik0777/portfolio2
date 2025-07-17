import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import { Project } from "@/app/lib/models"

export async function GET() {
  try {
    await dbConnect()
    const projects = await Project.find().sort({ createdAt: -1 })
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const data = await request.json()
    const project = await Project.create(data)
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
