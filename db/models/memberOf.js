import { Schema, model } from 'mongoose'

const memberOfSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    group: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  { timestamps: true }
)

export default model('MemberOf', memberOfSchema)
