import mongoose, { Schema } from "mongoose"

const SkillSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a skill name"],
      maxlength: [40, "Skill name cannot be more than 40 characters"],
    },
    level: {
      type: Number,
      required: [true, "Please provide a skill level"],
      min: [0, "Skill level cannot be less than 0"],
      max: [100, "Skill level cannot be more than 100"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema)
