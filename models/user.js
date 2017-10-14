var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	name: String,
	phone: String,
	email: String,
	panNumber: String,
	companyName: String 
})

module.exports = mongoose.model('User', userSchema)