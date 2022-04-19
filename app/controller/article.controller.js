const db = require('../models/index')
const articleSchema = db.article
exports.addArticle = (req, res) => {
  new articleSchema(req.body).save(()=>{
    res.status(200).json({'result':'OK'})
  })
}
exports.getArticles = (req, res) => {
  console.log(`### articleController access ### `)
  articleSchema.find()
  .exec((err, articles) => {
    if (err) return res.status(400).send(err)
    res.status(200).json({ success : true, articles})
  })
}