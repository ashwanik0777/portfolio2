import mongoose from "mongoose"

// Profile Schema
const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    location: String,
    image: String,
  },
  { timestamps: true },
)

// Skill Schema
const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: Number, required: true, min: 0, max: 100 },
    category: { type: String, required: true },
  },
  { timestamps: true },
)

// Project Schema
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
    technologies: [String],
    liveUrl: String,
    githubUrl: String,
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
)

// Experience Schema
const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: Date,
    description: String,
    technologies: [String],
  },
  { timestamps: true },
)

// Message Schema
const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true },
)

// User Schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

export const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema)
export const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema)
export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema)
export const Experience = mongoose.models.Experience || mongoose.model("Experience", experienceSchema)
export const Message = mongoose.models.Message || mongoose.model("Message", messageSchema)
export const User = mongoose.models.User || mongoose.model("User", userSchema)
