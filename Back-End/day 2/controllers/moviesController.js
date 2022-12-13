const fs = require('fs');

module.exports = {
    getAll: (req, res) => {
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))

        res.status(201).send({
            movies: getData.movies
        })
    }
}