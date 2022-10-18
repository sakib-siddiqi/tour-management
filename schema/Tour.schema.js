const { Schema, default: mongoose } = require("mongoose");
const { DB } = require("../db");

const Place = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  currency: {
    type: String,
    required: true,
    minLength: 1,
    default: "$",
  },
  views: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  image: {
    type: [String],
    required: true,
    minLength: 0,
    default:[]
  },
  location:{
    type:String,
    required:true,
    minLength: 2,
  },
  desc:{
    type:String,
    required:true,
    minLength: 10,
  },
});

module.exports.TourModel=mongoose.model("TourPlace",Place);