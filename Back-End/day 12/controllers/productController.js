module.exports = {
    getProducts: (req,res) => {
        res.status(201).send({
            isError: false,
            message: 'get product success',
            data: null
        })
    }
}