const db = require('../models/index')
const todoSchema = db.todo
exports.todo = (req, res) => {
  new todoSchema(req.body).save(()=>{
    res.status(200).json({'result':'OK'})
  })
}
exports.todolist = (req, res) => {
  console.log(`### todoController access ### `)
  todoSchema.find()
  .exec((err, todos) => {
    if (err) return res.status(400).send(err)
    res.status(200).json({ success : true, todos})
  })
}