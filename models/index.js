import mongoose from 'mongoose';
import userSchema from './user.js';
import projectSchema from './project.js';
import resultSchema from './result.js';

const mongoUrl = process.env.URL_MONGO;
mongoose.connect(mongoUrl);
mongoose.model('User', userSchema);
mongoose.model('Project', projectSchema);
mongoose.model('Result', resultSchema);

export default mongoose;
