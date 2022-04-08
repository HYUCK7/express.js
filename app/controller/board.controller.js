const db = require('../models/index')
const boardSchema = db.board
exports.boardform = (req, res) => {
  new boardSchema(req.body).save(()=>{
    res.status(200).json({'result':'OK'})
  })
}
exports.boardlist = (req, res) => {
  console.log(`### boardController access ### `)
  boardSchema.find()
  .exec((err, boards) => {
    if (err) return res.status(400).send(err)
    res.status(200).json({ success : true, boards})
  })
}