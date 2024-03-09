import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema(
  {
    name: String,
    googleId: String,
    email: String,
    photo: String,
    projectsMax: Number
  },
  { timestamps: true }
);

export default UserSchema;
