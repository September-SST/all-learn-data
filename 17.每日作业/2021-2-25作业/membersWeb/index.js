const koa = require('koa')
const initManage = require('./config/init')
const app = new koa()
initManage(app)
app.listen(2021)