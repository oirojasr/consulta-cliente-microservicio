const {Service} = require("../services/cliente.service")
const service = new Service()

exports.obtenerDatos = async ctx => {
    ctx.body = await service.obtenerDatos(ctx.params.id)
}