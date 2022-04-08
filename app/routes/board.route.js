const { boardform, boardlist } = require('../controller/board.controller')
module.exports = x => x.app.post(`${x.url}/write`, boardform)
module.exports = x => x.app.get(`${x.url}/boardlist`, boardlist)