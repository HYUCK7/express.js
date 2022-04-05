const { write } = require('../controller/board.controller')
module.exports = x => x.app.post(`${x.url}/write`, write)
        