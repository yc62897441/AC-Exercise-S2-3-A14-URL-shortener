// 載入套件
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const db = require('./config/mongoose')

// 伺服器參數
const app = express()
const PORT = process.env.PORT || 3000

// view engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

// 載入並使用總路由
const router = require('./routes/index')
app.use(router)

// 啟動並監聽伺服器
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`)
})
