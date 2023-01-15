// declares required modules
const router = require('express').Router()
const apiRoute = require('./api.js')
const viewRoute = require('./views.js')
// middleware
router.use('/api', apiRoute)
router.use(viewRoute)


module.exports = router