import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import { Experience } from "@/app/lib/models"

export async function GET() {
  try {
    await dbConnect()
    const experiences = await Experience.find().sort({ startDate: -1 })
    return NextResponse.json(experiences)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const data = await request.json()
    const experience = await Experience.create(data)
    return NextResponse.json(experience)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
