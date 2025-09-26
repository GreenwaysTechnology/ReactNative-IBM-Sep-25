const express = require('express')
const postsRouter = express.Router()

//todos api
postsRouter.get('/', (req, res) => {
    res.json({ message: 'Post get is called' })
})

postsRouter.post('/', (req, res) => {
    res.json({ message: 'Post Create is called' })
})
postsRouter.put('/:id', (req, res) => {
    res.json({ message: ' Post Update is called' })
})

postsRouter.delete('/:id', (req, res) => {
    res.json({ message: 'Post Delete is called' })
})

module.exports = postsRouter