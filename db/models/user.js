import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    firstName: {
      required: true,
      type: String,
      trim: true,
      minlength: 1
    },
    lastName: {
      required: true,
      type: String,
      trim: true,
      minlength: 1
    },
    email: {
      required: true,
      type: String,
      trim: true,
      minlength: 1
    }
  },
  { timestamps: true }
)

export default model('User', userSchema)
