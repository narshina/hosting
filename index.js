import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';
import userRouter from './routes/userroutes.js';
import cors from 'cors'

dotenv.config();  

const app=express()
app.use(express.json())
app.use(cors())

connectDB().then(() => {
 
  
  app.listen(5000, () => {
    console.log('✅ Server is running on http://localhost:5000');
  });
});

app.use('/user', userRouter);

export default app;