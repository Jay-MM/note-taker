
const path = require('path');
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// unblocks static files 
app.use(express.static('public'))

// homepage route
app.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "public", "index.html") );
})
// notes page route
app.get('/notes', (req,res) => {
    res.sendFile( path.join(__dirname, "public", "notes.html") )
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})