const express = require('express')
const TODOS = require('../mock-data/todos')
const todosRouter = express.Router()

//todos api
todosRouter.get('/', (req, res) => {
    res.json(TODOS)
})

todosRouter.post('/', (req, res) => {
    res.json({ message: 'Create is called' })
})
todosRouter.put('/:id', (req, res) => {
    res.json({ message: 'Update is called' })
})

todosRouter.delete('/:id', (req, res) => {
    res.json({ message: 'Delete is called' })
})

module.exports = todosRouter