import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv'
import FreeLancer from '../models/FreeLancerModel.js';

dotenv.config()
const createNewFreeLancer = asyncHandler(async (req,res) => {
    const { _id, monthlySalary } = req.body;
    const lastSalary = Number(monthlySalary) + Number(monthlySalary * process.env.TAX) 
    const freeLancer = await FreeLancer.create({
      _id,
      monthlySalary,
      lastSalary
    });
    if (freeLancer) {
      res.status(201).json({
        _id: freeLancer._id,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
})


const deleteFreeLancer = asyncHandler(async (req, res) => {
  const freeLancer = await FreeLancer.findById(req.body._id)

  if (freeLancer) {
    await freeLancer.remove()
    res.json({ message: 'freeLancer removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  createNewFreeLancer,
  deleteFreeLancer
}