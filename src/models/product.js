import mongoose from "mongoose";
import Category from "./category";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      minLength: 3,
    },
    github: String,
    description: String,
    images: [String],
    categoryId: [{
      type: mongoose.Types.ObjectId,
      ref: Category,
    }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", productSchema);
