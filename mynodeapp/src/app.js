const express = require('express')

//create application objectc
const app = express()
//connect router 
app.use('/api/todos', require('./routers/todos.router'))
app.use('/api/posts', require('./routers/posts.router'))

//start server
app.listen(3000, () => {
    console.log('Express server is ready!')
})