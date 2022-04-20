import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import TodoService from '../service/todoService.js'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app  = express()
app.use(cors())

app.post('/todo', cors(corsOptions), (req,res) => {
    const service = new TodoService()
    res.status(200).json(service.todo(req, res))
})
app.get('/todolist', cors(corsOptions), (_req, res) => {
    res.status(200).json(service.todolist(_req, res))
})

export default app