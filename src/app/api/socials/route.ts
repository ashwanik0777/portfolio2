import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import Social from "@/app/lib/models/social"

export async function GET() {
  try {
    await dbConnect()
    const socials = await Social.find({})
    return NextResponse.json(socials)
  } catch (error) {
    console.error("Socials fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const body = await request.json()
    const social = await Social.create(body)
    return NextResponse.json(social, { status: 201 })
  } catch (error: any) {
    console.error("Social creation error:", error)

    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
