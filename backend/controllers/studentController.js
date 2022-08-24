import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv'
import Student from '../models/StudentModel.js';
dotenv.config()

const createNewStudent = asyncHandler(async (req,res) => {
    const { _id, numOfHours } = req.body;
    const lastSalary = Number(numOfHours)* Number(process.env.MONTHLY_SALARY) 
    const student = await Student.create({
      _id,
      numOfHours,
      lastSalary
    });
    if (student) {
      res.status(201).json({
        _id: student._id,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
})

export {
  createNewStudent
}