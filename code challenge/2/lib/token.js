const jwt = require('jsonwebtoken');

require('dotenv').config()

module.exports = {
    generateToken: (payload) => {
        return jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '1h'
        })
    },
    verifyToken: (token) => {
        return jwt.verify(token, process.env.SECRET_KEY)
    }
}