const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tour-management');
module.exports.DB=mongoose;