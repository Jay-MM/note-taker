// declares required modules and data
const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const notesDBpath = path.join(__dirname, "..", "db", "notes.json")
// reads data from db
router.get('/notes', (req, res) => {
    fs.readFile(notesDBpath, 'utf-8', (err, data) => {
        if (err) {
        res.status(500).json(err)
        return
    }
    res.json(JSON.parse(data))

  }) 
})
// creates notes 
router.post("/notes", (req, res) => {
    fs.readFile(notesDBpath, "utf-8", (err, data) => {
        if (err) {
            res.status(500).json(err)
            return
        }

        const notesData = JSON.parse(data)
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: Math.random(),
        }
        notes.push(newNote)

        fs.writeFile(notesDBpath, JSON.stringify(notesData), (err) => { 
            if (err){
                res.status(500).json(err)
                return
            }
            res.status(200).json(newNote)
        })
    })
})
module.exports = router