var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	name: String,
	phone: String,
	email: String,
	panNumber: String,
	companyName: String
})

const User = mongoose.model('User', userSchema)

function saveUser(reqBody, callback) {
	let user = new User()
	user.name = reqBody.name
	user.phone = reqBody.phone
	user.email = reqBody.email
	user.panNumber = reqBody.panNo
	user.companyName = reqBody.company
	return user.save(callback)
}

module.exports = {
	saveUser
}