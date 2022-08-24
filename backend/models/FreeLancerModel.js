import mongoose from "mongoose";

const FreeLancerSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    monthlySalary: {
      type: Number,
      required: true,
    },
    lastSalary: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

const FreeLancer = mongoose.model("FreeLancer", FreeLancerSchema);

export default FreeLancer;
