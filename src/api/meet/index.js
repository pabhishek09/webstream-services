import { createMeetMethod, createMeetHandler } from './createMeet'
import { getMeetsMethod, getMeetsHandler } from './getMeets'
import { closeMeetMethod, closeMeetHandler } from './closeMeet'

export default [
  {
    path: '/meet',
    method: createMeetMethod,
    handler: createMeetHandler
  }, {
    path: '/meet',
    method: getMeetsMethod,
    handler: getMeetsHandler
  }, {
    path: '/meet',
    method: closeMeetMethod,
    handler: closeMeetHandler
  }
]
