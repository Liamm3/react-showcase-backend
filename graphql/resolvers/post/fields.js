import { User } from '../../../db/models'

const postFields = {
  Post: {
    user: async post => await User.findById(post.user)
  }
}

export default postFields
