import db from '../models/index.js'
import Database from '../config/database.js'
import dotenv from 'dotenv'
export default function UserSerivce() {
    const User = db.user
    const dbo = new Database()
    const dbConnect = dbo.getDb()
    dotenv.config()
            return {
                join(req, res) {
                    new User(req.body).save(function (err) {
                        if (err) {
                            res.status(500).send({message: err});
                            console.log('회원가입 실패')
                            return;
                        } else {
                            res.status(200).json({ok: 'ok'})
                        console.log('회원가입 성공')}
                    })
                    /**const matchDocument = {
                        userid: req.body.userid,
                        password: req.body.password,
                        email: req.body.email,
                        name: req.body.name,
                        phone: req.body.phone,
                        birth: req.body.birth,
                        address: req.body.address
                    };
                    dbConnect
                        .collection("users")
                        .insertOne(matchDocument, function (err, result) {
                            if (err) {
                                res
                                    .status(400)
                                    .send("Error inserting matches!");
                            } else {
                                console.log(`Added a new match with id ${result.insertedId}`);
                                res
                                    .status(204)
                                    .send();
                            }
                        }) */
                },
                login(req, res) {
                    User
                        .findOne({userid: req.body.userid}, function(err, user){
                            if(err) throw err
                            if(!user){
                                res.status(401).send({success: false, msg: '해당 ID가 존재하지 않습니다'});
                            }else{
                                console.log(' ### 로그인 정보 : '+ JSON.stringify(user))
                                user.comparePassword(req.body.password, function(_err, isMatch){
                                    console.log(' ### JWT 발급 전 : ')
                                    if(!isMatch){
                                        console.log(' ### 비밀번호가 틀렸다 ')
                                        res.status(401).send({loginSuccess: false, msg: '비밀번호가 틀렸습니다'});
                                    }else{
                                        console.log(' ### JWT 발급 직전 : ')
                                        user.generateToken((err, user)=>{
                                            if(err) res.status(400).send(err)
                                
                                            // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
                                            res
                                            .status(200)
                                            .json({loginSuccess : true, token : user.token, user: user})
                                        })
                                    }
                                })
                            }
                        })
        
                    /**const matchDocument = {
                        userid: req.body.userid,
                        password: req.body.password,
                        email: req.body.email,
                        name: req.body.name,
                        phone: req.body.phone,
                        birth: req.body.birth,
                        address: req.body.address
                    };
                    dbConnect
                        .collection("users")
                        .insertOne(matchDocument, function (err, result) {
                            if (err) {
                                res
                                    .status(400)
                                    .send("Error inserting matches!");
                            } else {
                                console.log(`Added a new match with id ${result.insertedId}`);
                                res
                                    .status(204)
                                    .send();
                            }
                        }) */
                },
                getUsers(_req, res) {
                    console.log(`### UserController access ### `)
                    User.find().exec((err, users) => {
                        if(err) return res.status(400).send(err)
                        res.status(200).json({success: true, users})
                    })
                }
            }
            
        }