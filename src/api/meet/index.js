import { createMeetMethod, createMeetHandler } from './createMeet'
import { getMeetsMethod, getMeetsHandler } from './getMeets'
import { endMeetMethod, endMeetHandler } from './endMeet'

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
    method: endMeetMethod,
    handler: endMeetHandler
  }
]
