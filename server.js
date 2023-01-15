// declares modules required 
const routes = require('./routes');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// unblocks files 
app.use(express.static('public'))
app.use(express.json());
app.use(routes)
// the port the local machine uses during development
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})