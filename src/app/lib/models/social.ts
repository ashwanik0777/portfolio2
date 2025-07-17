import mongoose, { Schema } from "mongoose"

const SocialSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a social name"],
      maxlength: [40, "Social name cannot be more than 40 characters"],
    },
    url: {
      type: String,
      required: [true, "Please provide a URL"],
    },
    icon: {
      type: String,
      required: [true, "Please provide an icon"],
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Social || mongoose.model("Social", SocialSchema)
