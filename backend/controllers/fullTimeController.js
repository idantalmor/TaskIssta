import asyncHandler from 'express-async-handler';

import FullTime from '../models/FullTimeModel.js';


const createNewFullTime = asyncHandler(async (req,res) => {
    const { _id, monthlySalary } = req.body;
    // const _id = crypto.randomBytes(16).toString("hex");
    const fullTime = await FullTime.create({
      _id,
      monthlySalary
    });
    if (fullTime) {
      res.status(201).json({
        _id: fullTime._id,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
})

export {
  createNewFullTime
}