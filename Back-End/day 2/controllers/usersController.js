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
        let {users} = JSON.parse(fs.readFileSync('./db/db.json'))

        let dataToSend = {}
        users.forEach((value) => {
            if(body.username === value.username && body.password === value.password){
                dataToSend = {
                    uid: value.uid,
                    username: value.username,
                    email: value.email,
                    role: value.role
                }
            }
        })

        res.status(201).send({
            isError: false,
            message: 'login success',
            data: dataToSend
        })
    }
}