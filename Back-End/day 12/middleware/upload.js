//import multer
const {multerUpload} = require('../lib/multer')

const deleteFiles = require('./../helpers/deleteFiles')

const uploadImages = (req, res, next) => {
    const multerResult = multerUpload.fields([{name: 'images', maxCount: 3}])
    multerResult(req,res, function(err){
        try {
            console.log('masuk upload')
            if(err) throw err
            req.files.images.forEach((value) => {
                if(value.size > 100000) throw {message: `${value.originalname} size is too large`, fileToDelete: req.files}
            })
            console.log('nexxt')
            next()
        } catch (error) {
            console.log('masuk error upload')
            if(error.fileToDelete) deleteFiles(error.fileToDelete)
            return res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    })
}

module.exports = uploadImages