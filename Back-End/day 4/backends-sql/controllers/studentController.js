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
                message: 'get data success',
                data: getData
            })
        } catch (error) {
            res.status(500).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    addStudents: async(req, res) => {
        try {
            //step 1: get value dari req.body
            let body = req.body
            //step 2: insert data ke database
            console.log(req.body)
            await query('INSERT INTO students SET ?', body)
    
            //step 3: send response
            res.status(201).send({ 
                isError: false,
                message: 'add data success',
                data: null
            })
        } catch(error){
            console.log(error)
            res.status(404).send({ 
                isError: true,
                message: error.message,
                data: null
            })
        }
    },
    
}