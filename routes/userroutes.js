import express from 'express'
import { add } from '../controller/usercomtroller.js';

const userRouter=express.Router()


userRouter.post('/add',add);

export default userRouter