const Koa = require('koa') // koa v2
const convert = require('koa-convert')
const loggerGenerator  = require('./middleware/logger-generator')
const app = new Koa()

app.use(convert(loggerGenerator()))

app.use(( ctx ) => {
    let url =ctx.request.url
    ctx.body = url
})

app.listen(3000)
console.log('the server is starting at port 3000')