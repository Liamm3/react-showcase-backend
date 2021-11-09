import { Schema, model } from 'mongoose'

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      required: true,
      type: String,
      minlength: 1,
      trim: true
    },
    content: {
      required: true,
      type: String,
      minlength: 1,
      trim: true
    },
    tags: [String]
  },
  {
    timestamps: true
  }
)

export default model('Post', postSchema)
