const Router = require('koa-router')
const router = new Router()
const usersModel = require('../../models/users')
router.post('/m1/doLogin', async ctx => {
    var { username, pwd } = ctx.request.body
    var res = await usersModel.find({ username, pwd: Number(pwd) })
    if (res.length) {
        ctx.cookies.set('login', true)
        ctx.redirect('/m1')
    } else {
        ctx.body = "<script>alert('用户名或密码错误');location.href='/login'</script>"
    }
})
module.exports = router