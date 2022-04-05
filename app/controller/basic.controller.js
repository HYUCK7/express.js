const { bmi } = require('../service/basic.service')

exports.getbmi = (req, res) =>{
    const {name, height, weight} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름: ${name}`)
    console.log(`키: ${height}`)
    console.log(`몸무게: ${weight}`)
    const json = bmi({name, height, weight})
    console.log(`계산된 JSON값 : ${JSON.stringify(json)}`)
    res.status(200).json(json)
}

