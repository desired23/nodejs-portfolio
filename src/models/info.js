import mongoose from "mongoose";
import Product from "./product";
const { Schema } = mongoose;

const infoSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 3,
    },
    description: {
      type: String,
    },
    age: {
      type: Number,
    },
    phone: {
      type: String,
    },
    logo: {
      type: String,
    },
    facebook: {
      type: String,
    },
    github: {
      type: String,
    },
    banner: {
      type: String,
    },
    email: {
      type: String,
    },
    cvLink: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Info", infoSchema);
