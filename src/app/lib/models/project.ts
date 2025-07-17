import mongoose, { Schema } from "mongoose"

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a project title"],
      maxlength: [100, "Project title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a project description"],
    },
    image: String,
    tags: [String],
    category: String,
    demoUrl: String,
    githubUrl: String,
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema)
