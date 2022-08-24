import asyncHandler from "express-async-handler";
import Employee from "../models/EmployeeModel.js";
import FullTime from "../models/FullTimeModel.js";
import FreeLancer from "../models/FreeLancerModel.js";
import Student from "../models/StudentModel.js";
import crypto from "crypto";

const createNewEmployee = asyncHandler(async (req, res) => {
  const { _id, firstName, lastName, seniority, type } = req.body;
  // const _id = crypto.randomBytes(16).toString("hex");
  const employee = await Employee.create({
    _id,
    firstName,
    lastName,
    seniority,
    type,
  });
  if (employee) {
    res.status(201).json({
      _id: employee._id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      seniority: employee.seniority,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getAllEmployee = asyncHandler(async (req, res) => {
  const allEmployees = await Employee.find({});
  const allFreeLancer = await FreeLancer.find({});
  const allFullTime = await FullTime.find({});
  const allStudent = await Student.find({});

  if (allEmployees) {
    let tempArray = [];
    for (let i = 0; i < allEmployees.length; i++) {
      let newEmployee = {};
      if (allEmployees[i].type == "FreeLancer") {
        for (let j = 0; j < allFreeLancer.length; j++) {
          if ((allEmployees[i]._id == allFreeLancer[j]._id)) {
            newEmployee = {
              _id: allEmployees[i]._id,
              firstName: allEmployees[i].firstName,
              lastName: allEmployees[i].lastName,
              seniority: allEmployees[i].seniority,
              type: allEmployees[i].type,
              monthlySalary: allFreeLancer[j].monthlySalary,
              lastSalary: allFreeLancer[j].lastSalary
            };
            tempArray.push(newEmployee);
          }
        }
    
      }
      if (allEmployees[i].type == "Student") {
        for (let j = 0; j < allStudent.length; j++) {
          if ((allEmployees[i]._id == allStudent[j]._id)) {
            newEmployee = {
              _id: allEmployees[i]._id,
              firstName: allEmployees[i].firstName,
              lastName: allEmployees[i].lastName,
              seniority: allEmployees[i].seniority,
              type: allEmployees[i].type,
              numOfHours: allStudent[j].numOfHours,
              lastSalary: allStudent[j].lastSalary
            };
            tempArray.push(newEmployee);
          }
        }
      
      }
      if (allEmployees[i].type == "FullTime") {
        for (let j = 0; j < allFullTime.length; j++) {
          if ((allEmployees[i]._id == allFullTime[j]._id)) {
            newEmployee = {
              _id: allEmployees[i]._id,
              firstName: allEmployees[i].firstName,
              lastName: allEmployees[i].lastName,
              seniority: allEmployees[i].seniority,
              type: allEmployees[i].type,
              monthlySalary: allFullTime[j].monthlySalary,
              lastSalary: allFullTime[j].monthlySalary
            };
            tempArray.push(newEmployee);
          }
        }
      
      }
    }

    res.status(201).json(
      tempArray
  );
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const updateEmployee = asyncHandler(async (req, res) => {
  const { _id, firstName, lastName, seniority, type} = req.body;
  const employee = await Employee.findById(_id);
  if (employee) {

    employee.firstName = req.body.firstName || employee.firstName;
    employee.lastName = req.body.lastName || employee.lastName;
    employee.seniority = req.body.seniority || employee.seniority;
    employee.type = req.body.type || employee.type;
    const updatedEmployee = await employee.save();
    res.json({
      _id: updatedEmployee._id,
      firstName: updatedEmployee.firstName,
      lastName: updatedEmployee.lastName,
      seniority: updatedEmployee.seniority,
      type: updatedEmployee.type,
    });
    res.json;
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});


export { createNewEmployee, getAllEmployee, updateEmployee };
