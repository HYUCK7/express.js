const { todo, todolist } = require('../controller/todo.controller');
module.exports = x => {x.app.post(`${x.url}/todo`, todo) 
                     x.app.get(`${x.url}/todolist`, todolist)}