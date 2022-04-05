const { getbmi } = require('../controller/basic.controller')
module.exports = x => x.app.post(`${x.url}/write`, getbmi)