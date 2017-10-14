const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const User = require('./models/user')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080
const router = express.Router()

router.use((req, res, next) => {
	console.log("Set up the middleware")
	next();
})

router.get('/', (req, res) => {
	res.json({message: "Hooray"})
})


router.route('/users')
	.post((req, res) => {
		let user = new User()
		user.name = req.body.name
		user.phone = req.body.phone
		user.email = req.body.email
		user.panNumber = req.body.panNumber
		user.companyName = req.body.companyName
		user.save((err) => {
			if (err)
				res.send(err)
			res.json({message: "Form successfully submitted!"})
		})
	})

app.use('/api', router)

mongoose.connect('mongodb://localhost:27017/demo') // done bye!


app.listen(port)
console.log("Listening on port " + port)
