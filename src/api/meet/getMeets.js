import MeetModel from './meet.model';

const getMeetsMethod = 'get'

async function getMeetsHandler (req, res) {
  console.log(':: getMeetsHandler ::')
  const meetId = req.query.id
  let response
  try {
    if (meetId) {
      response = await MeetModel.findById(meetId)
    } else {
      response = await MeetModel.find()
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.msg || 'Error in fetching meet' })
  }
  res.send(response)
}

export {
  getMeetsMethod,
  getMeetsHandler
}
