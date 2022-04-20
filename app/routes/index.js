import express from "express"
const indexRouter = express.Router();
//
/* GET home page. */
/**router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
indexRouter.route('/').get(function(_req, res){
  res.json({"현재 시간 : ":new Date().toLocaleString()})
}) 
export default indexRouter
