const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fdhuha17@gmail.com',
        pass: 'nuxqmadvrrvugyik'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter