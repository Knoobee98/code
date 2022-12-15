const db = require('./../connections/connect');
const util = require('util'); //fix
const query = util.promisify(db.query).bind(db); //fix

module.exports = {
    getPassangers: async(req, res) => {
        try{
            let getData = await query('SELECT * FROM passangers');
            res.status(201).send({
                isError: false,
                message: 'get data success',
                data: getData
            })
        } catch(error){
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    getPassangersName: async(req, res) => {
        try{
            let body = req.body;
            let getData = await query(`SELECT * FROM passangers WHERE Name LIKE '%${body.name}%'`);
            res.status(201).send({
                isError: false,
                message: 'get data success',
                data: getData
            })
        } catch(error){
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    getTotalSurvived: async(req, res) => {
        try{
            let getData = await query(`SELECT Survived, COUNT(*) as total_survived FROM passangers WHERE survived = 1 GROUP BY Survived`);
            res.status(201).send({
                isError: false,
                message: 'get data success',
                data: getData
            })
        } catch(error){
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    }, 

    getTotalSurvivedByGender: async(req, res) => {
        try{
            let getData = await query('SELECT Survived, sex, COUNT(*) as total FROM passangers WHERE survived = 1 GROUP BY sex')
            res.status(201).send({
                isError: false,
                message: 'get data success',
                data: getData
            })
        } catch(error){
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    getTotalSurvivedByClass: async(req, res) => {
        try{
            let body = req.body
            let getData = await query(`SELECT Survived, Pclass, COUNT(*) as total FROM passangers WHERE Survived = 1 GROUP BY Pclass HAVING Pclass = ${body.Pclass}`)
            res.status(201).send({
                isError: false,
                message: 'get data success',
                data: getData
            })
        } catch (error){
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    }
}