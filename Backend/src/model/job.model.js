import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {  
      type: String,
      required: true,
    },
    experience: {
      type: String, 
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    candidates: [
      {
        email: {
          type: String,  
        },
        status: {
          type: String, 
        },
      },
    ],
  },
  {
    timestamps: true,  
  }
);

export const Job = mongoose.model("Job", blogSchema);
