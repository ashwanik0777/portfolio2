import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import Skill from "@/app/lib/models/skill"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const skill = await Skill.findById(params.id)

    if (!skill) {
      return NextResponse.json({ error: "Skill not found" }, { status: 404 })
    }

    return NextResponse.json(skill)
  } catch (error) {
    console.error("Skill fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const body = await request.json()

    const skill = await Skill.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    })

    if (!skill) {
      return NextResponse.json({ error: "Skill not found" }, { status: 404 })
    }

    return NextResponse.json(skill)
  } catch (error: any) {
    console.error("Skill update error:", error)

    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const skill = await Skill.findByIdAndDelete(params.id)

    if (!skill) {
      return NextResponse.json({ error: "Skill not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Skill deleted successfully" })
  } catch (error) {
    console.error("Skill deletion error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
