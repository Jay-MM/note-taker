
const path = require('path');
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


// unblocks static files 
app.use(express.static('public'))






app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})