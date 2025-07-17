import mongoose, { Schema } from "mongoose"

const ExperienceSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Please provide a job title"],
      maxlength: [100, "Job title cannot be more than 100 characters"],
    },
    company: {
      type: String,
      required: [true, "Please provide a company name"],
      maxlength: [100, "Company name cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a job description"],
    },
    startDate: {
      type: Date,
      required: [true, "Please provide a start date"],
    },
    endDate: {
      type: Date,
      default: null,
    },
    technologies: [String],
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema)
