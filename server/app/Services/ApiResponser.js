'user strict'

const Response = use('Adonis/Src/Response')

class ApiResponser {

  constructor(){

  }

  showAll(collection, code = 200){
    return this.successResponse(collection, code)
  }

  showOne(resource, code = 200){
    return this.successResponse(resource, code)
  }

  errorResponse(message, code, { response }){
    return response.status(code).json({
      message: message,
      status: code
    })
  }

  successResponse(data, code, { response }){
    return response.status(code).json({
      data: data,
      status: code
    })
  }
}

module.exports = ApiResponser
