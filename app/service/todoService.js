import Database from "../config/database.js"
import db from "../models/index.js"
export default function TodoService() {
    const Todo = db.Todo
    const dbo = new Database()
    const dbConnect = dbo.getDb()
    return {
        addTodo(req, res) {
            console.log('### 진행 4: Node Server에 진입함.' + JSON.stringify(req.body))
            new Todo(req.body).save(() => {
                res
                    .status(200)
                    .json({'result': 'OK'})
            })
        },
        getTodo(_req, res) {
            console.log(`### todoController access ### `)
            Todo
                .find()
                .exec((err, todos) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, todos})
                })
        }
    }
}