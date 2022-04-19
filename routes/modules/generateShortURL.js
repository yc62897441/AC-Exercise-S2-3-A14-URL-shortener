const express = require('express')
const router = express.Router()

const UrlRecord = require('../../models/urlRecord')
const generateShortURL = require('../../tools/generate_shortURL')

// 產生短網址
router.post('/', (req, res) => {
  // // 取得使用者輸入之原始網址
  // const longURL = req.body.longURL
  // // 取得網頁應用程式的網域網址
  // let mainURL = req.rawHeaders[17] + '/'
  // if (mainURL !== 'http://localhost:3000/') {
  //   mainURL = 'https://ac-s2-3-a14-url-shortener.herokuapp.com/'
  // }
  // mainURL = mainURL + 'redirectToLongURL/'

  // 取得使用者輸入之原始網址
  const longURL = req.body.longURL
  // 取得網頁應用程式的網域網址
  const reqHeadersReferer = req.headers.referer
  const reqHeadersRefererArray = reqHeadersReferer.split('/')
  const mainURL = reqHeadersRefererArray[0] + '//' + reqHeadersRefererArray[2] + '/redirectToLongURL/'

  // 讀取資料庫資料
  UrlRecord.find()
    .lean()
    .then(records => {
      // 檢查原始網址是否已經存在於資料庫
      const results = records.find(element => element.longURL === longURL)

      // 如果原始網址已存在於資料庫，回傳資料庫內之短網址，結束流程
      if (results) {
        const shortURL = results.shortURL
        res.render('index', { longURL: longURL, mainURL: mainURL, shortURL: shortURL })
      } else {
        // 如果原始網址不存在於資料庫
        // 生成短網址
        let shortURL = generateShortURL()

        // 檢查短網址是否已經存在於資料庫，如果已經存在則重新生成短網址
        while (records.find(element => element.shortURL === shortURL)) {
          shortURL = generateShortURL()
        }

        // 建立新一組之「原始網址-短網址」
        const newURLBatch = new UrlRecord({
          longURL: longURL,
          shortURL: shortURL
        })

        // 儲存新一組之「原始網址-短網址」於資料庫中
        newURLBatch.save()
          .then(() => {
            const stateShort = true
            res.render('index', { stateShort: stateShort, longURL: longURL, mainURL: mainURL, shortURL: shortURL })
          })
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
