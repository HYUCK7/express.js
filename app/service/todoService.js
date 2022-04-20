import db from "../models/index.js"
export default function TodoService() {
    const todoSchema = db.todo
    return {
        addTodo(req, res) {
            console.log('### 진행 4: Node Server에 진입함.' + JSON.stringify(req.body))
            new todoSchema(req.body).save(() => {
                res
                    .status(200)
                    .json({'result': 'OK'})
            })
        },
        getTodo(_req, res) {
            console.log(`### todoController access ### `)
            todoSchema
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