const express = require('express')

//create application objectc
const app = express()

//expose api
app.get('/api/todos', (req, res) => {
    res.json([{ id: 1, text: 'express', status: true }])
})

app.post('/api/todos', (req, res) => {
    res.json({ message: 'Create is called' })
})
app.put('/api/todos/:id', (req, res) => {
    res.json({ message: 'Update is called' })
})

app.delete('/api/todos/:id', (req, res) => {
    res.json({ message: 'Delete is called' })
})

//start server
app.listen(3000, () => {
    console.log('Express server is ready!')
})