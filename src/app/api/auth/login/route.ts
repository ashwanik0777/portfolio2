import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/app/lib/mongodb"
import { User } from "@/app/lib/models"
import { verifyPassword, generateToken } from "@/app/lib/auth"

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const { username, password } = await request.json()

    const user = await User.findOne({ username })
    if (!user || !verifyPassword(password, user.password)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const token = generateToken(user._id.toString())

    const response = NextResponse.json({ success: true })
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
