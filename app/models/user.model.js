module.exports = mongoose => {
    return mongoose.model(
        'user',
        mongoose.Schema(
            {userid: String,
                password: String,
                name: String,
                email: String,
                phone: String,
                birth: String,
                address: String
            }, { timestamps : true}
        )
    )
}

/*const mongoose = require('mongoose')
mongoose.Promise = global.Pr
const Schema = mongoose.Schema
const UserSchema = new Schema({
    id : { type: String, required : true, trim : true, unique : true},
    password : {type: String, required : true, trim : true, unique : true},
    name : { type: String, required: true, trim: true,unique: true },
    tel : { type: String, required : true, trim: true, unique: true}
})
let User = mongoose.model('User', UserSchema)
module.exports = User;*/