import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import employeeRoutes from './routes/employeeRoutes.js'
import fullTimeRoutes from './routes/fullTimeRoutes.js'
import freeLancerRoutes from './routes/freeLancerRoutes.js'
import studentRoutes from './routes/studentRoutes.js'
import connectDB from './config/db.js'


dotenv.config()

connectDB()

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/employee", employeeRoutes)
app.use("/api/fullTime", fullTimeRoutes)
app.use("/api/freeLancer", freeLancerRoutes)
app.use("/api/student", studentRoutes)

app.use(notFound)
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
