module.exports = async ( ctx ) => {
  const title = 'home'
  const name = '名字呢'
  await ctx.render('index', {
    title,
    name
  })
}