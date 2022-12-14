const fs = require('fs');

module.exports = {
    getAll: (req, res) => {
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))

        res.status(201).send({
            movies: getData.movies
        })
    },

    getBy: (req, res) => {
        //step 1: ambil value dari request
        let dataQuery = req.query;
        //step 1.1: replace % dengan spasi
        dataQuery.status?.includes('%')? dataQuery.status = dataQuery.status.replace(/%/g,' ') : dataQuery.status
        dataQuery.time?.includes('%')? dataQuery.time = dataQuery.time.replace(/%/g,' ') : dataQuery.time
        //step 2: ambil data dari db.json
        let {movies} = JSON.parse(fs.readFileSync('./db/db.json'))
        //step 3: manipulasi data
        let dataToSend = [];
        movies.forEach((value) => {
            if(dataQuery.status === value.status && dataQuery.location === value.location && dataQuery.time === value.time){
                dataToSend.push(value)
            } else if(dataQuery.status === value.status){
                dataToSend.push(value)
            } else if(dataQuery.location === value.location){
                dataToSend.push(value)
            } else if(dataQuery.time === value.time){
                dataToSend.push(value)
            }
        })
        //step 4: kirim response data
        res.status(201).send({
            isError: false,
            message: 'get data success',
            data: dataToSend
        })


    }
}