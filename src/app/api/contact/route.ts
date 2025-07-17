import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import { Message } from "@/app/lib/models"

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const data = await request.json()
    const message = await Message.create(data)
    return NextResponse.json(message)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
