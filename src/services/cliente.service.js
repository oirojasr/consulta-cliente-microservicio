const Yenv = require('yenv')
const axios = require('axios')
const { cliente_dto } = require('../dto/dto.cliente')
const env = new Yenv()

class Service {
  async obtenerDatos(id) {
    try {
      let send = null
      const config = {
        headers: { 
        "Content-Type" : "application/json",
        }
      }
      const url = `${env.URL_API}`
      // Simulamos q consultamos a un api Cliente
      const respuesta = await axios
      .get(url, config)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return {error: "Error al obtener información"}
      })
      const data = respuesta.filter(x => x.id === parseInt(id))[0]
      const dto = new cliente_dto(data.id, data.title, data.userId);
      return dto
    } catch {
      return { resultado: "no se encontró dato"}
    }
  }
}

exports.Service = Service