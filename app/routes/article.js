import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ArticleService from '../service/articleService.js'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app  = express()
app.use(cors())

app.post('/addArticle', cors(corsOptions), (req, res)=>{
    const service = new ArticleService()
    res.status(200).json(service.addArticle(req,res))
})
app.get('/getArticles', cors(corsOptions), (_req, res) => {
    res.status(200).json(service.getArticle(_req, res))
})

export default app