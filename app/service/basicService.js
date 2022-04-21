
export default function BasicService() {
    const calcBmi = (payload) => {
        const {name, height, weight} = payload
        let _height = Number(height)
        let _weight = Number(weight)

        let bmi = _weight / Math.pow(_height, 2)
        let output = Math.round(bmi * 100) * 100
        console.log(`계산중인 값: ${JSON.stringify(result)}`)
        var result = {
            name,
            height,
            weight
        }
        if (18.5 < output) 
            result.bmi = "underweight"
        if (18.5 >= output) 
            result.bmi = "Normal"
        if (output > 25) 
            result.bmi = "Obese"
        if (output > 30) 
            result.bmi = "overweight"
        console.log(`계산끝난 값: ${JSON.stringify(result)}`)
        return result
    }
    const calc = (payload) => {
        const {num1, opcode, num2} = payload
        let _num1 = Number(num1)
        let _num2 = Number(num2)
        const result = {
            num1,
            opcode,
            num2
        }
        switch (opcode) {
            case "+":
                result.res = _num1 + _num2
                break;
            case "-":
                result.res = _num1 - _num2
                break;
            case "*":
                result.res = _num1 * _num2
                break;
            case "/":
                result.res = _num1 / _num2
                break;
            case "%":
                result.res = _num1 % _num2
                break;
        }
        return result
    }
    return {
      getCalc(req, _res){
        const  { num1 , opcode , num2} = req.body
        console.log(`JSON 값 ㅣ ${JSON.stringify(req.body)}`)
        console.log(`숫자1 : ${num1}`)
        console.log(`연산기호 : ${opcode}`)
        console.log(`숫자2 : ${num2}`)
        const json = calc({num1, opcode, num2})
        console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
        return json
      
    },
      getBmi(req, _res) {
          const {name, height, weight} = req
              .body
              console
              .log(`넘어온 JSON 값: ${JSON.stringify(req.body)}`)
          console.log(`이름 : ${name}`)
          console.log(`키 : ${height}`)
          console.log(`몸무게 : ${weight}`)
          const json = calcBmi({name, height, weight})
          console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
          return json
      }
  }

}