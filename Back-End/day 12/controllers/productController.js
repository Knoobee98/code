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
            console.log('masukcontroller')
            let dataToCreate = JSON.parse(req.body.data)

            let postProducts = await products.create(dataToCreate, {transaction: t})
            let products_id = postProducts.dataValues.id

            let pathToCreate = []
            req.files.images.forEach(value => {
                pathToCreate.push({path: value.path, products_id: products_id})
            })
            let createProductImages = await products_images.bulkCreate(pathToCreate, {transaction: t, ignoreDuplicates: true})
            console.log('masuk123')
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
        
    }
}