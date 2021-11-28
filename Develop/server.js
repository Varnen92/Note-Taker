const fs = require ('fs')
const path = require('path')
const express = require('express')
const { notes } = require('./db/db.json')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())





app.listen(PORT, () => {
    console.log(`API Server now on port ${POST}!`)
})