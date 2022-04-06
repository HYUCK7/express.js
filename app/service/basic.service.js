exports.bmi = (payload) => {
    const {name, height, weight} = payload
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
/*exports.calc = (payload) => {
  const {num1, opcode, num2} = payload
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
}*/