import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      required: true,
      type: String,
      trim: true,
      minlength: 3
    },
    email: {
      required: true,
      type: String,
      trim: true,
      minlength: 1
    },
    password: {
      required: true,
      type: String
    }
  },
  { timestamps: true }
)

export default model('User', userSchema)
