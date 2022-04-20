import db from '../models/index.js'
export default function UserSerivce() {
    const userSchema = db.user
    return {
        join(req, res) {
            console.log('### 진행 4: Node Server에 진입함.' + JSON.stringify(req.body))
            new userSchema(req.body).save(() => {
                res
                    .status(200)
                    .json({'result': 'OK'})
            })
        },
        getUsers(_req, res) {
            console.log(`### userController access ###`)
            userSchema
                .find()
                .exec((err, users) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, users})
                })
        },
        profile(req, res) {
            console.log(`### user profile access ### `)
            userSchema
                .find({id: req.params.id}) // diffrent id
                .exec((err, user) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, user})
                })
        },
        login(req, res) {
            console.log(`### user login access ### `)
            userSchema
                .find({userid: req.params.userid, password: req.params.password}) // diffrent id
                .exec((err, user) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, user})
                })
            try {
                const id = 'test'
                const nick = 'test'
                // jwt.sign() 메소드: 토큰 발급
                const token = jwt.sign({
                    id,
                    nick
                }, process.env.JWT_SECRET, {
                    expiresIn: '1m', //1분
                    issuer: '토큰 발급자'
                });

                return res.json({code: 200, message: '토큰이 발급되었습니다.', token});
            } catch (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({code: 500, message: '서버 에러'});
            }
        }
    }
}