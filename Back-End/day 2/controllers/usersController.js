const fs = require('fs');

module.exports = {
    register: (req, res) => {
        let body = req.body
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))
        let generateId = Date.now()
        getData.users.push({uid: generateId, ...body})
        fs.writeFileSync('./db/db.json', JSON.stringify(getData))

        res.status(201).send({
            uid: generateId,
            username: body.username,
            email: body.email,
        })
    },

    login: (req, res) => {
        let body = req.body
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))

        if(getData.users.find(user => user.email === body.email && user.password === body.password)){
            res.status(200).send({
                uid: getData.users.uid,
                username: getData.users.username,
                email: getData.users.email,
                role: 'admin'
            })
        }
    }
}