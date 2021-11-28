const fs = require ('fs')
const path = require('path')
const express = require('express')
const { notes } = require('./db/db.json')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('./api/notes', (req, res) => {
    res.json(notes)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('./notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}!`)
})