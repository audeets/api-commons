import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema(
  {
    timestamp: Date,
    category: String,
    url: String,
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    rules: [
      {
        rule: String,
        title: String,
        check: Boolean,
        details: [
          {
            text: String,
            link: String
          }
        ]
      }
    ]
  },
  { timestamps: true }
);

export default ResultSchema;
