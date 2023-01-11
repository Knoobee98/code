//import multer
const multer = require('multer');

//import file system
const fs = require('fs')

//setup disk storage & filename
let defaultPath = 'Public'
var storage = multer.diskStorage({
    destination: async(req, file, cb) => {
        console.log(file)
        //check directory exist or not
        let isDirectoryExist = fs.existsSync(`${defaultPath}/${file.fieldname}`)

        if(!isDirectoryExist) {
            //create directory
            await fs.promises.mkdir(`${defaultPath}/${file.fieldname}`, { recursive: true });
        }

        //create directory
        if(file.fieldname === 'pdf'){
            cb(null, `${defaultPath}/${file.fieldname}`)
        }

        if(file.fieldname === 'images'){
            cb(null, `${defaultPath}/${file.fieldname}`)
        }
    },
    filename: (req, file, cb) => {
        cb(null, 'PIMG' + '-' + Date.now() + Math.round(Math.random() * 100000000) + '.' + file.mimetype.split('/')[1])
    }
})

//setup filter file
var fileFilter = (req, file, cb) => {
    console.log(file)
    if(file.mimetype.split('/')[0] === 'image'){
        cb(null, true)
    } else if(file.mimetype.split('/')[0] !== 'image'){
        cb(new Error('File must be Image'))
    }
}

exports.multerUpload = multer({storage: storage, fileFilter: fileFilter})