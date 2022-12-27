module.exports = {
    register: (req, res) => {
        let body = req.body
        

        res.status(201).send({
            isError: false,
            message: 'register successfull',
            data: null
        })
    },

    login: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'login successfull',
            data: null
        })
    }
}