import express from 'express'
import meetRoutes from './meet'
import ping from './ping'

const router = express.Router()

const routes = [
  // Add root route files here
  ...meetRoutes
]

router.get('/ping', ping)
routes.forEach((route) => {
  // Create express routes from local routes, change this to a middleware
  router[route.method](route.path, (req, res) => route.handler(req, res))
})

export default router
