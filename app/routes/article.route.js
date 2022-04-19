const { addArticle, getArticles } = require('../controller/article.controller')
module.exports = x =>{ 
x.app.post(`${x.url}/addArticle`, addArticle)
x.app.get(`${x.url}/getArticles`, getArticles) 
}