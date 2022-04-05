exports.write = (req, res)=>{
    const {PassengerId, name,  teamId, subject} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`PassengerId Value : ${PassengerId}`)
    console.log(`name 값 : ${name}`)
    console.log(`teamId 값 : ${teamId}`)
    console.log(`subject 값 : ${subject}`)
    res.status(200).json({'result':'OK'})
  }