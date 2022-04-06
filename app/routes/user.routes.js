const { signup } = require('../controller/user.controller');
module.exports = x => x.app.post(`${x.url}/signup`, signup) ;