const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
    createToken: (payload) => {
        return jwt.sign(payload, process.env.TOKEN_PASS, {
            expiresIn: '5s'
        })
    },

    validateToken: (token) => {
        return jwt.verify(token, process.env.TOKEN_PASS)
    }
}