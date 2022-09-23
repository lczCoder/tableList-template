const router = require('koa-router')()
const send = require('koa-send');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/error', async (ctx, next) => {
  await ctx.render('template')
})

router.get('/download', async (ctx)=>{
  const path = 'public/dwonloadFiles/index.jsx'
  ctx.attachment(path);
  await send(ctx, path);
 })

module.exports = router
