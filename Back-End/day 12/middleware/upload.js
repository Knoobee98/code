//import multer
const {multerUpload} = require('../lib/multer')

const uploadImages = (req, res, next) => {
    const multerResult = multerUpload.fields([{name: 'images', maxCount: 3}])
    multerResult(req,res, function(err){
        try {
            if(err) throw err
            if(req.files.images.forEach((value) => {
                if(value.size > 100000) return res.status(404).send({
                    isError: true,
                    message: `${value.originalname} size is too large`,
                    data: null
                })
            }))

            next()
        } catch (error) {
            return res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    })
}

module.exports = uploadImages