const bcrypt = require('bcrypt')
const saltRounds = 10

const hashPassword = async(password) => {
    try {
        return await bcrypt.hash(password, saltRounds)
    } catch (error) {
        return null
    }
}

const hashMatch = async(password, hashPassword) => {
    try {
        let match = await bcrypt.compare(password, hashPassword)
        return match
    } catch (error) {
        return false
    }
}

module.exports = {
    hashPassword,
    hashMatch
}