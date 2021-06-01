import MeetModel from './meet.model';

const endMeetMethod = 'put'

async function endMeetHandler (req, res) {
  console.log(':: endMeetHandler ::')
  const meetId = req.query.id
  if (!meetId) return res.status(400).send({ msg: 'Meet id is missing' })
  let response
  try {
    response = await MeetModel.findByIdAndUpdate(meetId, { 
      endTime: new Date().toISOString(),
      isActive: false 
    })
  }
  catch (err) {
    res.status(500).send({ msg: err.msg || 'Error in updating meet' })
  }
  res.send(response)
}

export {
  endMeetMethod,
  endMeetHandler
}
