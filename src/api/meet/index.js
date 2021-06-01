import { createMeetMethod, createMeetHandler } from './createMeet'
import { getMeetsMethod, getMeetsHandler } from './getMeets'

export default [
  {
    path: '/meet',
    method: createMeetMethod,
    handler: createMeetHandler
  }, {
    path: '/meet',
    method: getMeetsMethod,
    handler: getMeetsHandler
  }
]
