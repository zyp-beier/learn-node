'use strict'

const ioredis = require('ioredis')
const client = new ioredis(6379, '192.168.1.1')

client.on('connect', () => {
  console.log('redis connected')
})

client.on('error', err => {
  console.log('redis' + err)
})

client.on('close', () => {
  console.log('Redis connection disconnected')
})

client.on('SIGINT', () => {
  client.disconnect()
})

module.exports = client