'use strict'

const User = use('app/Models/User')
class UserController {
	user({request, response}){
		console.log('reuqest==>',request.data)
		const user = new User;
		user.email = request.data.data.email;
		await user.save();

		return response;
	}
}

module.exports = UserController
