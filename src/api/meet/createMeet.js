import MeetModel from './meet.model';

const createMeetMethod = 'post'

async function createMeetHandler (req, res) {
  console.log(':: createMeetHandler ::')
  const body = req.body
  let response
  try {
    const meetModel = new MeetModel(body)
    const validation = meetModel.validateSync()
    if (validation && validation.errors) return res.status(400).send({ msg: validation.message })
    response = await meetModel.save()
  }
  catch (err) {
    res.status(500).send({ msg: err.msg || 'Error in creating meet' })
  }
  res.send(response)
}

export {
  createMeetMethod,
  createMeetHandler
}
