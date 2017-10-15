const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const User = require('./models/user')
const { saveFiles } = require('./storage')
const { saveUser } = require('./models/user')

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(fileUpload())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const port = process.env.PORT || 8080
const router = express.Router()

router.route('/users')
	.post((req, res) => {
		saveUser(req.body, (err, savedUser) => {
			if (err)
				res.send(err)
			const userId = savedUser._id
			saveFiles(userId, req.files)
				.then(() => res.json({message: "Form successfully submitted!"}))
				.catch((err) => res.status(500).send(err))
		})
	})

app.use('/api', router)

mongoose.connect('mongodb://localhost:27017/demo', {
	useMongoClient: true
})

app.listen(port, () => console.log("Listening on port " + port))
