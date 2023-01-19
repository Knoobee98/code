const jwt = require('jsonwebtoken');

//import .env
require('dotenv').config()

const jwtVerify = (req, res, next) => {
    const token = req.headers.auth
    console.log(token)

    if(!token) return res.status(404).send({
        isError: true,
        message: 'token not found',
        data: null
    })

    jwt.verify(token, process.env.SECRET_KEY, (err, dataToken) => {
        try {
            if(err) throw err
            req.dataToken = dataToken

            next()
        } catch (error) {
            res.status(404). send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    })
}

module.exports = jwtVerify