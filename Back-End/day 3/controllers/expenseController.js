const fs = require('fs')

module.exports = {
    getExpenses: (req, res) => {
        //step 1: baca file db.json
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))
        //step 2: kirim response
        res.status(201).send({
            isError: false,
            message: 'get expenses success',
            data: getData
        })
    },

    getDetails: (req, res) => {
        //step 1: ambil id dari params
        let id = parseInt(req.params.id);
        //step 2: baca file db.json
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))
        //step 3: looping data db.json
        let dataToSend = []
        getData.expenses.forEach((value) => {
            if (value.id == id) {
                return dataToSend.push(value)
            }
        })
        //step 4: kirim response
        res.status(201).send({
            isError: false,
            message: 'get details success',
            data: dataToSend
        })
    },

    addExpenses: (req, res) => {
        let body = req.body
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))
        let generateId = getData.length + 1
        let generateDate = Date.now("YYYY-MM-DD")

        getData.expenses.push({
            id: generateId,
            name: body.name,
            nominal: body.nominal,
            category: body.category,
            date: generateDate
        })

        fs.writeFileSync('./db/db.json', JSON.stringify(getData))

        res.status(201).send({
            isError: false,
            message: 'add expenses success',
            data: getData
        })
    },

    totalByRange: (req, res) => {
        //step 1: ambil query date range
        let {start, end} = req.query
        start = new Date(start).getTime()
        end = new Date(end).getTime()
        //step 2: baca file db.json
        let {expenses} = JSON.parse(fs.readFileSync('./db/db.json'))
        //step 3: manipulasi data
        let dataToSend = []
        expenses.forEach((value) => {
            if(new Date(value.date).getTime() >= start && new Date(value.date).getTime() <= end){
                dataToSend.push(value)
            }
        })

        //step 4: kirim response
        res.status(201).send({
            isError: false,
            message: 'get total by range success',
            data: dataToSend
        })

    }
}