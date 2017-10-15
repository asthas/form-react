const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const cors = require('cors')
const path = require('path')
const User = require('./models/user')
const fileUpload = require('express-fileupload')



app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(fileUpload())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

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
		user.panNumber = req.body.panNo
		user.companyName = req.body.company
		user.save((err, savedUser) => {
			if (err)
				res.send(err)

			const userId = savedUser._id
			console.log(req.files)
			saveFiles(userId, req.files)
				.then(() => res.json({message: "Form successfully submitted!"}))
				.catch((err) => res.status(500).send(err))
		})
	})

const saveFiles = (userId, files) => {
	return Promise.all(
		files.forEach((file) => saveFile(userId, file))
	)
}

const saveFile = (userId, fileObj) => {
	return new Promise((resolve, reject) => {
		const { name, file } = fileObj
		const uploadTo = `uploads/${userId}/${name}`
		file.mv(uploadTo, (err) => {
			if(err)
				reject(err)
			else
				resolve()
		})

	})
}

router.route('/upload')
	.post((req, res) => {
		if(!req.files) 
			return res.status(400).send('No files were uploaded!')
		const { file } = req.files
		const uploadTo = `uploads/${file.name}`
		file.mv(uploadTo, (err) => {
			if(err) 
				return res.status(500).send(err)
			res.send(`File uploaded to <a href="${uploadTo}">${uploadTo}</a>`)
		})
	})

app.use('/api', router)

mongoose.connect('mongodb://localhost:27017/demo')


app.listen(port)
console.log("Listening on port " + port)
