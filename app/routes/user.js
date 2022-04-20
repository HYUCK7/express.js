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

app.post('/signup', cors(corsOptions), (req, res)=>{
    const service = new UserSerivce()
    res.status(200).json(service.join(req, res))
})
app.post('/login', cors(corsOptions), (req, res)=>{
    const service = new UserSerivce()
    res.status(200).json(service.login(req, res))
})
app.get('/userlist', cors(corsOptions), (_req, res)=>{
    const service = new UserSerivce()
    res.status(200).json(service.getUsers(_req, res))
}),
app.get('/profile/:id', cors(corsOptions), (_req, res)=>{
    const service = new UserSerivce()
    res.status(200).json(service.profile(_req, res))
})

export default app