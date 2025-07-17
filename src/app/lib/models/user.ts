import mongoose, { Schema } from "mongoose"
import crypto from "crypto"

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Please provide a password"],
    },
    salt: String,
  },
  {
    timestamps: true,
  },
)

UserSchema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString("hex")
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex")
}

UserSchema.methods.validatePassword = function (password: string) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex")
  return this.passwordHash === hash
}

export default mongoose.models.User || mongoose.model("User", UserSchema)
