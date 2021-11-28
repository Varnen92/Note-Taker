const fs = require ('fs')
const path = require('path')
const express = require('express')
const { notes } = require('./db/db.json')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

function saveNewNote(body, noteArray) {
    const note = body
    noteArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: noteArray}, null, 2)
    )
    return note
}



app.get('./api/notes', (req, res) => {
    res.json(notes)
}) 
 
app.post('/api/notes', (req,res) => {
    const note = saveNewNote(req.body, notes)
    res.json(note)
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