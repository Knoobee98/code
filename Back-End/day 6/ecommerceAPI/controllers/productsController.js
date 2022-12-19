module.exports = {
    getProduct: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'get product success',
            data: null
        })
    },

    getProductId: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'get product by id success',
            data: null
        })
    },

    createProduct: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'create product success',
            data: null
        })
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