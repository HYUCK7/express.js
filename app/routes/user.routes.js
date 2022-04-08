const { signup, userlist } = require('../controller/user.controller');
module.exports = x => x.app.post(`${x.url}/signup`, signup) ;
module.exports = x => x.app.get(`${x.url}/userlist`, userlist) ;