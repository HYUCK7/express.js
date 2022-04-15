const db = require('../models/index')
const userSchema = db.user
exports.signup = (req,res) => {
    console.log('### 진행 4: Node Server에 진입함.' + JSON.stringify(req.body))
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
exports.profile = (req, res) => {
    console.log(`### user profile access ### `)
    userSchema.find({id: req.params.id}) // diffrent id
    .exec((err, user) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({ success: true, user})
    }
    )
}