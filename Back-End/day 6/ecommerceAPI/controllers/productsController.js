module.exports = {
    getProduct: async(req, res) => {
        try {
            let findProduct = await products.findAll()
            res.status(200).send({
                isError: false,
                message: 'get product success',
                data: findProduct
            })
        } catch (error) {
            res.status(400).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
        
    },

    getProductId: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'get product by id success',
            data: null
        })
    },

    createProduct: async(req, res) => {
        try {
            const { name } = req.body
            const t  = await sequelize.transaction()

            let checkProduct = await products.findOne({
                where: {
                    name: name
                }
            })

            if(checkProduct) return res.status(400).send({
                isError: true,
                message: 'product already exist',
                data: null
            })

            let createProduct = await products.createProduct({ name }, {transaction: t})

            await t.commit()
            res.status(200).send({
            isError: false,
            message: 'create product success',
            data: createProduct
            })
        } catch (error) {
            res.status(400).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    updateProduct: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'update product success',
            data: null
        })
    },

    deleteProduct: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'delete product success',
            data: null
        })
    }

}