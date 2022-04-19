const express = require('express')
const router = express.Router()

// home
router.get('/', (req, res) => {
  console.log(req.headers)
  res.render('index')
})

module.exports = router
