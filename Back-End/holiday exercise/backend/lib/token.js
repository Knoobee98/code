const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (payload) => {
        return jwt.sign(payload, 'jcwd2302', {
            expiresIn: '1m'
        })
    },
    verifyToken: (token) => {
        return jwt.verify(token, 'jcwd2302')
    }
}