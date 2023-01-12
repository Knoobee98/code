//import sequelize
const { sequelize } = require('./../models')

//import model
const db = require('./../models/index')
const products = db.products
const products_images = db.products_images

const deleteFiles = require('./../helpers/deleteFiles')


module.exports = {
    createProduct: async(req,res) => {
        const t = await sequelize.transaction()
        try {
            let dataToCreate = JSON.parse(req.body.data)

            let postProducts = await products.create(dataToCreate, {transaction: t})
            let products_id = postProducts.dataValues.id

            let pathToCreate = []
            req.files.images.forEach(value => {
                pathToCreate.push({path: value.path, products_id: products_id})
            })
            let createProductImages = await products_images.bulkCreate(pathToCreate, {transaction: t, ignoreDuplicates: true})
            await t.commit()
            res.status(201).send({
                isError: false,
                message: 'create product success',
                data: null
            })
        } catch (error) {
            console.log('masuk2')
            await t.rollback()
            deleteFiles(req.files)
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
        
    },
    deleteProduct: async(req, res) => {
        const t = await sequelize.transaction()
        try {
            //step 1: ambil id dari query params
            let products_id = parseInt(req.params.id)
            //step 2: ambil path image to delete, untuk kebutuhan delete file
            let findAllImagePath = await products_images.findAll({
                where: {
                    products_id
                },
                transaction: t
            })
            //step 3: delete data di tabel products_images where products_id = id
            await products_images.destroy({
                where: {
                    products_id
                },
                transaction: t
            })
            //step 4: delete data di tabel products where id = id
            await products.destroy({
                where: {
                    id: products_id
                },
                transaction: t
            })
            //step 5: delete files
            deleteFiles({images: findAllImagePath})
            //step 5: response
            await t.commit()
            res.status(201).send({
                isError: false,
                message: 'deletion product success',
                data: null
            })
        } catch (error) {
            await t.rollback()
            deleteFiles(req.files)
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
        
        
    },
    updateProduct: async(req, res) => {
        const t = await sequelize.transaction()
        try {
            //ambil id dari params
            let products_images_id = parseInt(req.params.products_images_id)
            //ambil path image to delete, untuk kebutuhan delete file
            let getImagePath = await products_images.findOne({
                where: {
                    id: products_images_id
                },
                transaction: t
            })
            console.log(getImagePath.dataValues.path)
            //delete data di tabel products_images where products_id = id
            let pathToDelete = []
            pathToDelete.push(getImagePath)

            //delete data di tabel products_images where products_id = id
            await products_images.update({
                path: pathToDelete[0].dataValues.path
            }, {
                where: {
                    id: products_images_id
                }
            }, {transaction: t})
            //delete files
            deleteFiles({images: pathToDelete})
            //response
            await t.commit()
            res.status(201).send({
                isError: false,
                message: 'update product success',
                data: null
            })
        } catch (error) {
            await t.rollback()
            deleteFiles(req.files)
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }

    }
}