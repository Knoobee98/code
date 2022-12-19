module.exports = {
    index: (req, res) => {
        res.status(201).send({
            isError: false,
            message: "hello world",
            data: null
        })
    }
}