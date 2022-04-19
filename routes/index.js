// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用路由模組
const home = require('./modules/home')
const generateShortURL = require('./modules/generateShortURL')
const redirectToLongURL = require('./modules/redirectToLongURL')

// 路由模組
router.use('/', home)
router.use('/generateShortURL', generateShortURL)
router.use('/redirectToLongURL/', redirectToLongURL)

// 匯出路由模組
module.exports = router
