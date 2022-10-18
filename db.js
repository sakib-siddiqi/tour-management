const mongoose = require('mongoose');
require('dotenv').config();
const DB_URL=process.env.NODE_ENV="production"?process.env.DB_URL:'mongodb://localhost:27017/tour-management'
mongoose.connect(DB_URL);
module.exports.DB=mongoose;