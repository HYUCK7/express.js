require('dotenv').config();
var cors = require('cors')
const express = require('express');
const jwt = require('jsonwebtoken')
const tokenRouter = require('./app/routes/token');
const app = express();
const { port , MONGO_URI } = process.env;
const APP = './app/routes'
app.use(express.static('public'));
app.use('/token', tokenRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//require(`${APP}/article.route`)({url:'/api/article',app})
//require(`${APP}/todo.route`)({url:'/api/todo',app})
//require(`${APP}/user.routes`)({url:'/api/user',app})
//require(`${APP}/game.route`)({url:'/api/game',app})
//require(`${APP}/admin.route`)({url:'/api/admin',app})
//require(`${APP}/basic.route`)({url:'/api/bmi', app})
//require(`${APP}/basic.route`)({url:'/api/calc', app})

const nodes = ['basic', 'board', 'user']
for (const leaf of nodes){
  require(`${APP}/${leaf}.routes`)({url:`/api/${leaf}`, app})
}

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
const db = require('./app/models/index')
db.mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology : true})
  .then(()=>{
    console.log('몽고DB 연결 성공 ~!')
    // console.log('db.url', db.url)
    // console.log('db.mongoose', db.mongoose)
    // console.log('db.user.db', db.user.db)
  })
  .catch(err => {console.log(' 몽고DB와의 연결 실패', err)
    process.exit();
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})
app.listen(port, () => {
  console.log({"현재 시간 : ":new Date().toLocaleString()})
})
