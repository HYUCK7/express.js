require('dotenv').config();
var cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
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
app.post("/api/board/write",(req, res)=>{
  const {PassengerId, name,  teamId, subject} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`PassengerId Value : ${PassengerId}`)
  console.log(`name 값 : ${name}`)
  console.log(`teamId 값 : ${teamId}`)
  console.log(`subject 값 : ${subject}`)
  res.json(req.body)
})
function computeBmi(name, weight, height){
  let _height = Number(height)
  let _weight = Number(weight)
  
  let bmi = _weight/Math.pow (_height, 2)
  let output = Math.round(bmi * 100) * 100
  var result = {name, height, weight}

  if(18.5<output)
    result.bmi = "underweight"
  if(18.5>=output)
    result.bmi = "Normal"
  if(output>25)
    result.bmi = "Obese"
  if(output>30)
    result.bmi = "overweight"
    console.log(`계산끝난 값: ${JSON.stringify(result)}`)
  return result
}
app.post("/api/bmi/write", (req, res)=>{
  const {name, weight, height} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`이름: ${name}`)
  console.log(`키: ${height}`)
  console.log(`몸무게: ${weight}`)
  const json = computeBmi(name, weight, height)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
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