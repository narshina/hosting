import express from 'express'
import { add, view } from '../controller/usercomtroller.js';

const userRouter=express.Router()


userRouter.post('/add',add);
userRouter.post('/view',view)

export default userRouter