import mongoose from "mongoose";

const FullTimeSchema = mongoose.Schema(
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
    },
  },

  {
    timestamps: true,
  }
);

const FullTime = mongoose.model("FullTime", FullTimeSchema);

export default FullTime;
