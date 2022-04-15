// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用路由模組
const homeAndRedirect = require('./modules/homeAndRedirect')
// const long_short_switch = require('./modules/long_short_switch')
// const short_long_switch = require('./modules/short_long_switch')
// const redirect = require("./modules/redirect")
const switch_ = require('./modules/switch')

// 路由模組
router.use('/', homeAndRedirect)
// router.use("/long_short_switch", long_short_switch)
// router.use("/short_long_switch", short_long_switch)
// router.use("/redirect/", redirect)
router.use('/switch', switch_)

// 匯出路由模組
module.exports = router
