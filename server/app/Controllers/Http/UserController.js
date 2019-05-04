'use strict'

const User = use('App/Models/User')

class UserController {

  async login({ request, auth }){
    const { email, password } = request.all()
    const token = await auth.withRefreshToken()
                            .attempt(email, password)
    return token;
  }

  async register({ request }){
    //object deconstruction
    const { email, password } = request.all();
    const user = await User.create({
        email,
        password,
        username: email
    })

    return user
  }

  async refresh({request, auth}){
    const { refresh_token } = request.all();

    return await auth.newRefreshToken()
                     .generateForRefreshToken(refresh_token)
  }
}

module.exports = UserController
