const router = require('express').Router()

// homepage route
router.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "..", "public", "index.html") );
})
// notes page route
router.get('/notes', (req,res) => {
    res.sendFile( path.join(__dirname, "..", "public", "notes.html") )
})


module.exports = router