import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import { Skill } from "@/app/lib/models"

export async function GET() {
  try {
    await dbConnect()
    const skills = await Skill.find().sort({ category: 1, name: 1 })
    return NextResponse.json(skills)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const data = await request.json()
    const skill = await Skill.create(data)
    return NextResponse.json(skill)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
