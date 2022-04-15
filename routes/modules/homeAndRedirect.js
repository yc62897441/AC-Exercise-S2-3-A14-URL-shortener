const express = require('express')
const router = express.Router()

const urlRecord = require('../../models/urlRecord')

// home
router.get('/', (req, res) => {
  res.render('index')
})

// redirect
router.get('/:id', (req, res) => {
  const shortURL = req.params.id
  urlRecord.find()
    .lean()
    .then(records => {
      try {
        const longURL = records.find(element => element.shortURL === shortURL).longURL
        res.redirect(longURL)
      } catch {
        res.send('Error, 輸入之短網址可能無對應網站')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
