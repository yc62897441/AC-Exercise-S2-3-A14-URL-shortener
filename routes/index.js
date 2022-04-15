// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用路由模組
const homeAndRedirect = require('./modules/homeAndRedirect')
const switch_ = require('./modules/switch')

// 路由模組
router.use('/', homeAndRedirect)
router.use('/switch', switch_)

// 匯出路由模組
module.exports = router
