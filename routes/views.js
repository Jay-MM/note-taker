const router = require('express').Router()
const path = require('path');

// homepage route
router.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "..", "public", "index.html") );
})
// notes page route
router.get('/notes', (req,res) => {
    res.sendFile( path.join(__dirname, "..", "public", "notes.html") )
})

//  wildcard route to homepage
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public", "index.html"))
);


module.exports = router