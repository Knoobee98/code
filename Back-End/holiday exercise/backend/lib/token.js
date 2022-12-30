const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (payload) => {
        return jwt.sign(payload, 'jcwd2302')
    },
    verifyToken: (token) => {
        return jwt.verify(token, 'jcwd2302')
    }
}