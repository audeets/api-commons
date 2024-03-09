import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    urls: [String],
    title: String,
    domain: String,
    user: mongoose.Types.ObjectId,
    deleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default ProjectSchema;
