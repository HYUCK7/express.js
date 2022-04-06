const db = require('../models/index')
const userSchema = db.user
exports.signup = (req,res) => {
    new userSchema({
        id: req.body.id,
        password: req.body.password,
        name : req.body.name,
        tel: req.body.tel
    }).save(()=>{
        res.status(200).json({'result' : 'ok'})
    })
}