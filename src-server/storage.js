const saveFile = (userId, fileName, fileObj) => {
	return new Promise((resolve, reject) => {
		const { name } = fileObj
		const extension = name.slice(name.lastIndexOf('.'));
		const uploadTo = `${__dirname}/uploads/${userId}-${fileName}${extension}`
		fileObj.mv(uploadTo, (err) => {
			if(err)
				reject(err)
			else
				resolve()
		})

	})
}

const saveFiles = (userId, files) => {
	const fileNames = Object.keys(files)
	return Promise.all(
		fileNames.map(fileName => saveFile(userId, fileName, files[fileName]))
	)
}

module.exports = {
    saveFiles
}