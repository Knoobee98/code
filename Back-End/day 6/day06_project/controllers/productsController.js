const db = require('../connections/connect')
const util = require('util')
const query = util.promisify(db.query).bind(db)

module.exports = {
    getProducts: async(req, res) => {
        try {

            await query(`start transaction`)

            let searchBy = req.query
            let query1 = `SELECT * FROM products WHERE `
            let dataToSend = []
            for(let key in searchBy){
                query1 += `${key} = ? AND `
                dataToSend.push(searchBy[key])
            }
            query1 = query1.split(' ')
            query1 = query1.slice(0, -2).join(' ')
            let result = await query(query1, dataToSend)
            // let result2 = searchBy.price ? await query(`SELECT * FROM products WHERE price=?`, [searchBy.price]) : await query(`SELECT * FROM products WHERE discount=?`, [searchBy.discount])
            // let result = await query(`SELECT * FROM products WHERE price=? AND discount=?`, [searchBy.price, searchBy.discount])

            await query(`commit`)

            res.status(201).send({
                isError: false,
                message: 'get data Success',
                data: result
            })

        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    postProducts: async(req, res) => {
        try {
            let body = req.body
            let result = await query(`INSERT INTO products SET ?`, body)
            res.status(201).send({
                isError: false,
                message: 'post data Success',
                data: result
            })
        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    }, 

    editProducts: async(req, res) => {

    },

    deleteProducts: async(req, res) => {

    }
}