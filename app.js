import express from 'express'
import http from 'http'
import dotenv from 'dotenv';
import connect from './src/lib/db'
import middlewares from './src/lib/middlewares'
import api from './src/api'
import socket from './src/socket/index'

dotenv.config()

const app = express()
const server = http.createServer(app) 

connect().then(() => {
  console.log('1')
  socket(server)
  middlewares(app)
  app.use('/api', api)
}).catch((err) => {
  console.log(err);
  console.log('2')
  process.exit(1)
})

export default server
