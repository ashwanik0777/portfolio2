import mongoose, { Schema } from "mongoose"

const ProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    title: {
      type: String,
      required: [true, "Please provide a title"],
      maxlength: [60, "Title cannot be more than 60 characters"],
    },
    shortBio: {
      type: String,
      required: [true, "Please provide a short bio"],
      maxlength: [200, "Short bio cannot be more than 200 characters"],
    },
    bio: {
      type: String,
      required: [true, "Please provide a bio"],
    },
    currentWork: String,
    email: {
      type: String,
      required: [true, "Please provide an email"],
    },
    phone: String,
    location: String,
    experience: String,
    education: String,
    roles: [String],
    image: String,
    aboutImage: String,
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema)
