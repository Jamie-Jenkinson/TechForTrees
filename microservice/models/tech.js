import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number, // Price of item in Trees
    required: true,
  },
  itemColour: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Tech", techSchema);
