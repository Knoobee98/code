const db = require('./../connections/connect');
const util = require('util'); //fix
const query = util.promisify(db.query).bind(db); //fix

module.exports = {
    getAllStudents: async(req, res) => {
        try {
            let getData = await query('SELECT * FROM students')
            console.log(getData)
            res.status(201).send({ 
                isError: false,
                message: 'get all students success',
                data: getData
            })
        } catch (error) {
            res.status(500).send({
                isError: true,
                message: 'get all students failed to get data',
                error: error.message
            })
        }
    }
}