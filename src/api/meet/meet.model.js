import { Schema, model } from 'mongoose'

const hostSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})

const meetSchema = new Schema({
  host: {
    type: hostSchema,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true,
  },
  startTime: {
    type: Date,
    required: false,
    default: new Date().toISOString(),
  },
  endTime: {
    type: Date,
    required: false,
  }
});

const MeetModel = model('Meet', meetSchema);

export default MeetModel;
