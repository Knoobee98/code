module.exports = {
    getProducts: async(req,res) => {
        try {
            res.status(201).send({
                isError: false,
                message: 'get product success',
                data: null
            })
        } catch (error) {
            res.status(404).send({
                isError: true,
                message: 'failed to get',
                data: null
            })
        }
    },
    createProduct: (req,res) => {
        console.log(req.files)
        try {
            res.status(201).send({
                isError: false,
                message: 'create product success',
                data: null
            })
        } catch (error) {
            res.status(404).send({
                isError: true,
                message: 'failed to create product',
                data: null
            })
        }
        
    }
}