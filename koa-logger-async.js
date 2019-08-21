const Koa = require('koa')
const loggerAsync = require('./middleware/logger-async')
const app = new Koa()
app.use(loggerAsync())
app.use(ctx => {
    let url =ctx.request.url
    ctx.body = url
})
app.listen(3000)
console.log('the server is starting at port 3000')