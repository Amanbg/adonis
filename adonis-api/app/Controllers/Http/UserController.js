'use strict'

const User = use('App/Models/User')
class UserController {
  async user({ request, response }) {
    const user = new User;
    user.email = request._body.data.email;
    await user.save();

    return { user: user.toJSON() };
  }

  async users({ request, response }) {
    const users = await User.all()
    return users;
  }
}

module.exports = UserController
