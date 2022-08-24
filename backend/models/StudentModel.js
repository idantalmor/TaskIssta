import mongoose from "mongoose";

const StudentSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    numOfHours: {
      type: Number,
      required: true,
    },
    lastSalary: {
      type: Number,
      def: 0,
    },
  },

  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);

export default Student;
