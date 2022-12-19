module.exports = {
    getUser: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'get user success',
            data: null
        })
    },

    getUSerId: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'get user by id success',
            data: null
        })
    },

    createUser: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'create user success',
            data: null
        })
    },

    updateUser: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'update user success',
            data: null
        })
    },

    deleteUser: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'delete user success',
            data: null
        })
    }
    
}