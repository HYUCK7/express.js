import db from '../models/index.js'
export default function ArticleService() {
    const articleSchema = db.article
    return {
        addArticle(req, res) {
            new articleSchema(req.body).save(() => {
                res
                    .status(200)
                    .json({'result': 'OK'})
            })
        },
        getArticles(_req, res) {
            console.log(`### articleController access ### `)
            articleSchema
                .find()
                .exec((err, articles) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, articles})
                })
        }
    }
}