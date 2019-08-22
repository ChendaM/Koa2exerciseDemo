function log(ctx) {
    console.log(3)
    console.log(ctx.method, ctx.header.host + ctx.url)
}
module.exports = function () {
    console.log(1)
    return function* (next) {
        // 执行中间件的操作
        console.log(2)
        log(this)
        if (next) {
            console.log(4)
            yield next
        }
    }
}