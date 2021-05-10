import { close } from './meets'

const closeMeetMethod = 'delete'

function closeMeetHandler (req, res) {
  console.log(':: closeMeetHandler ::')
  const { id } = req.body
  if (!id) return res.status(400).send({ msg: 'Missing fields' })
  res.send(close(id))
}

export {
  closeMeetMethod,
  closeMeetHandler
}
