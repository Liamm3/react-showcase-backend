import { Schema, model } from 'mongoose'

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
})

export default model('Group', groupSchema)
