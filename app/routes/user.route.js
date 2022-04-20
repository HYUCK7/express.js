const { signup, userlist, profile, login } = require('../controller/user.controller')
const {verifyToken} = require('./middleware')

module.exports = x => {
x.app.post(`${x.url}/signup`, signup)
x.app.post(`${x.url}/login`,verifyToken, login)
x.app.get(`${x.url}/userlist`, userlist)
x.app.get(`${x.url}/profile/:id`, profile)}