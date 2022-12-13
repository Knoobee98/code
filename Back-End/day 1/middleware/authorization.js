const Auth = (req, res, next) => {
    if(req.headers.authorization !== 'admin'){
        return res.status(401).send({
            isError: true,
            message: "user not authorized",
            data: null
        })
    }

    next() //jika user sudah terotentikasi, maka akan lanjut ke controller
}

module.exports = Auth