const Koa = require('koa')
const KoaBodyParser = require('koa-bodyparser')
const Yenv = require('yenv')
const env = Yenv()
const routers = require('./routers')
const app = new Koa()

// middleware
app
.use(KoaBodyParser())

app.use(routers.routes())

app.listen(env.PORT,() => {
    console.log(`listen port ${env.PORT}`)
})