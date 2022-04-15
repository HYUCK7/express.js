require('dotenv').config();
var cors = require('cors')
const express = require('express');
const app = express();
const { port , MONGO_URI } = process.env;
const APP = './app/routes'
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require(`${APP}/board.route`)({url:'/api/board',app})
require(`${APP}/todo.route`)({url:'/api/todo',app})
require(`${APP}/user.routes`)({url:'/api/user',app})
//require(`${APP}/game.route`)({url:'/api/game',app})
//require(`${APP}/admin.route`)({url:'/api/admin',app})
//require(`${APP}/basic.route`)({url:'/api/bmi', app})
//require(`${APP}/basic.route`)({url:'/api/calc', app})

/**const nodes = ['basic', 'board', 'user']
for (const leaf of nodes){
  require(`${APP}/${leaf}.routes`)({url:`/api/${leaf}`, app})
}*/

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
app.post("/api/team/write", (req,res)=>{
  const {TeamId1, TeamId2, house, TeamName,
    orgYyyy, stadiumName, address, tel} = req.body
    console.log(`팀 아이디1: ${TeamId1}`)
    console.log(`팀 아이디2: ${TeamId2}`)
    console.log(`연고지: ${house}`)
    console.log(`팀 이름: ${TeamName}`)
    console.log(`창립연도: ${orgYyyy}`)
    console.log(`경기장 이름: ${stadiumName}`)
    console.log(`주소 : ${address}`)
    console.log(`전화번호: ${tel}`)
    res.json(req.body)
    //1
})