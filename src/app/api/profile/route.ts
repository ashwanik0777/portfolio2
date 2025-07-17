import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import { Profile } from "@/app/lib/models"

export async function GET() {
  try {
    await dbConnect()
    const profile = await Profile.findOne()
    return NextResponse.json(profile)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const data = await request.json()

    let profile = await Profile.findOne()
    if (profile) {
      profile = await Profile.findOneAndUpdate({}, data, { new: true })
    } else {
      profile = await Profile.create(data)
    }

    return NextResponse.json(profile)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
