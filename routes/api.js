// declares required modules and data
const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const notesData = path.join(__dirname, "..", "db", "notes.json")


module.exports = router