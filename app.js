import express from 'express'
import socketio from 'socket.io'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv';


import api from './src/api'
import onIoConnect from './src/socket/index'

dotenv.config()
const app = express()
const server = http.createServer(app)

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(' ')
const io = socketio(server, {
  cors: {
    origin: allowedOrigins
  },
  path: '/signal/'
})
io.on('connection', onIoConnect)

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', api)

export default server
