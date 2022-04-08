const db = require('../models/index')
const userSchema = db.user
exports.signup = (req,res) => {
        new userSchema(req.body).save(()=>{
            res.status(200).json({'result':'OK'})
    })
}
exports.userlist = (req, res) => {
    console.log(`### userController access ###`)
    userSchema.find()
    .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success : true, users })
    })
}