//import sequelize
const { sequelize } = require('./../models')
const { Op } = require('sequelize')

//import model
const db = require('./../models/index')
const bus = db.bus
const seats = db.seats

//import jwttoken
const { generateToken, verifyToken } = require('./../lib/token')

module.exports = {
    search: async(req,res) => {
        const { date, from, to } = req.query
        try {
            let findBus = await bus.findAll({
                where: {
                    [Op.and] : [
                        {date: date},
                        {from: from},
                        {to: to}
                    ]
                }
            })

            if(!findBus) return res.status(404).send({
                isError: true,
                message: 'bus not found',
                data: null
            })

            let findSeats = await 


            res.status(201).send({
                isError: false,
                message: 'bus found',
                data: findBus
            })

        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
            
        }
    },

    detailBus: async(req, res) => {
        const { id } = req.params
    },

    booking: async(req, res) => {
        const { travel_name, total_seat, seat_number, total_prices } = req.body
        
    }
}