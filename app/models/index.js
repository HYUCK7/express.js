import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './user.model.js'
import TodoModel from './todo.model.js'
//import ArticleModel from '/article.model.js'
//import TodoModel from '/todo.model.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
//db.user = require('./user.model')(mongoose)
db.user = new UserModel(mongoose)
db.Todo = new TodoModel(mongoose)
//db.article = ArticleModel(mongoose)
//db.todo = TodoModel(mongoose)

export default db