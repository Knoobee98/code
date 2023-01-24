//import sequelize
const { sequelize } = require('./../models')
const { Op } = require('sequelize')

//import model
const db = require('./../models/index')
const bus = db.bus
const seats = db.seats


module.exports = {
    searchBy: async(req,res) => {
        const { date, from, to } = req.query
        try {
            findBuses =  await sequelize.query(`SELECT b.id, b.bus, s.bookfrom, s.bookto, t.schedule_date, s.class, s.price, s.total_seats, IFNULL(SUM(t.total_seat), 0) as total_seat_booked,
            s.total_seats - IFNULL(SUM(t.total_seat), 0) as total_seat_available FROM transactions t
            RIGHT JOIN seats s ON (s.id = t.seats_id AND (t.schedule_date = ?))
            JOIN buses b ON b.id = s.bus_id
            WHERE s.bookfrom = ? AND s.bookto = ?
            GROUP BY b.id;`,
            {
                replacements: [date, from, to],
                type: sequelize.QueryTypes.SELECT
            })

            res.status(201).send({
                isError: false,
                message: 'Success',
                data: findBuses
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