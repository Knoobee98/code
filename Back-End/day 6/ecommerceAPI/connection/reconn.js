const redis = require('async-redis')
const client = redis.createClient({
    port: 6379
})

client.on('connect', (error) => {
    console.log('Redis connected')
})
client.on('error', (error) => {
    console.log(error)
})

module.exports = client