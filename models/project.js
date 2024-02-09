import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    url: String,
    title: String,
    description: String,
    user: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

export default ProjectSchema;
