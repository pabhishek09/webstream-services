import express from 'express'
import socketio from 'socket.io'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import http from 'http'
import cors from 'cors'

import api from './src/api'
import onIoConnect from './src/socket/index'

const app = express()
const server = http.createServer(app)

const io = socketio(server, {
  cors: {
    origin: ['http://localhost:3000']
  },
  path: '/signal/'
})
io.on('connection', onIoConnect)

app.use(cors('http://localhost:3000'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', api)

export default server
