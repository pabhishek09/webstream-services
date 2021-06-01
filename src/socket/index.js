import socketio from 'socket.io'
import onConnect from './onConnect';

function socket(server) {
  const io = socketio(server, {
    cors: {
      origin: process.env.ALLOWED_ORIGINS.split(' ')
    },
    path: '/signal/'
  })
  io.on('connection', onConnect)
}

export default socket
