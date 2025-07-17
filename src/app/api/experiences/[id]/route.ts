import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import Experience from "@/app/lib/models/experience"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const experience = await Experience.findById(params.id)

    if (!experience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 })
    }

    return NextResponse.json(experience)
  } catch (error) {
    console.error("Experience fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const body = await request.json()

    const experience = await Experience.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    })

    if (!experience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 })
    }

    return NextResponse.json(experience)
  } catch (error: any) {
    console.error("Experience update error:", error)

    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const experience = await Experience.findByIdAndDelete(params.id)

    if (!experience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Experience deleted successfully" })
  } catch (error) {
    console.error("Experience deletion error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
