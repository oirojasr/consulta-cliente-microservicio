const Router = require('koa-router')
const clienteRouter = require('./cliente.router')

const router = new Router()

router.use('/', clienteRouter.routes(), clienteRouter.allowedMethods())

module.exports = router
