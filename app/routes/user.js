import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import UserSerivce from '../service/userService.js'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app  = express()
app.use(cors())
app.use(function(_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

app.post('/signup', cors(corsOptions), (req, res)=>{
    new UserSerivce().join(req,res)
})
app.post('/login', cors(corsOptions), (req, res)=>{
    new UserSerivce().login(req,res)
})
app.get('/userlist', cors(corsOptions), (_req, res)=>{
   new UserSerivce().getUsers(_req, res)
}),
app.get('/profile/:id', cors(corsOptions), (_req, res)=>{
    const service = new UserSerivce()
    res.status(200).json(service.profile(_req, res))
})

export default app