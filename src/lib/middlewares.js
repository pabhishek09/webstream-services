import { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

function middlewares(app) {

  const allowedOrigins = process.env.ALLOWED_ORIGINS.split(' ')

  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

  app.use(cors(corsOptions))
  app.use(helmet())
  app.use(logger('dev'))
  app.use(json())
  app.use(urlencoded({ extended: false }))
  app.use(cookieParser())

}

export default middlewares
