const express = require('express')
const router = express.Router()

const urlRecord = require('../../models/urlRecord')

router.post('/', (req, res) => {
  // 取得使用者輸入之短網址，並取最後末 5 碼
  let shortURL = req.body.shortURL
  shortURL = shortURL.slice(-5)

  // 取得網頁應用程式的網域網址
  const mainURL = req.rawHeaders[17] + '/'

  urlRecord.find()
    .lean()
    .then(records => {
      const longURL = records.find(element => element.shortURL === shortURL).longURL
      res.render('index', { longURL: longURL, mainURL: mainURL, shortURL: shortURL })
    })
    .catch(error => console.log(error))
})

module.exports = router
