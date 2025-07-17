import mongoose, { Schema } from "mongoose"

const MessageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
    },
    subject: {
      type: String,
      required: [true, "Please provide a subject"],
      maxlength: [200, "Subject cannot be more than 200 characters"],
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Message || mongoose.model("Message", MessageSchema)
