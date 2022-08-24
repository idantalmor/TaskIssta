import mongoose from "mongoose";


const EmployeeSchema = mongoose.Schema(
  {
    
    _id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    seniority: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
