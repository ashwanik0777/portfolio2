import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import User from "@/app/lib/models/user"

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const { username, password } = await request.json()

    // Check if user exists
    const existingUser = await User.findOne({ username })

    if (existingUser) {
      return NextResponse.json({ error: "Username already exists" }, { status: 400 })
    }

    // Create new user
    const user = new User({ username })
    user.setPassword(password)
    await user.save()

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { id: user._id, username: user.username },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
