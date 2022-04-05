require('dotenv').config();
var cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
const APP = './app/routes'
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//require(`${APP}/board.route`)({url:'/api/board',app})
//require(`${APP}/todo.route`)({url:'/api/todo',app})
//require(`${APP}/user.routes`)({url:'/api/user',app})
//require(`${APP}/game.route`)({url:'/api/game',app})
//require(`${APP}/admin.route`)({url:'/api/admin',app})
require(`${APP}/basic.route`)({url:'/api/bmi',app})

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})
//mongoose
//  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('Successfully connected to mongodb'))
//  .catch(e => console.error(e));

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
})
app.post('/api/calc/write', (req,res) => {
  const {num1, num2, opcode} = req.body
  console.log(`숫자1 :${num1}`)
  console.log(`연산기호: ${opcode}`)
  console.log(`숫자2 :${num2}`)
  
  const json = calculator(num1, opcode, num2)
  console.log(JSON.stringify(json))
  
  res.json(json)
})
function calculator(num1, opcode, num2){
  let _num1 = Number(num1)
  let _num2 = Number(num2)
  var result = {num1, opcode, num2}
  switch (opcode){
    case "+" :
        result.calc = (_num1 + _num2)
        break;
    case "-" :
        result.calc = (_num1 - _num2)
        break;
    case "*" :
        result.calc = (_num1 * _num2)
        break;
    case "/" :
        result.calc = (_num1 / _num2)
        break;
    case "%" :
        result.calc = (_num1 % _num2)
        break;
}return result 
}