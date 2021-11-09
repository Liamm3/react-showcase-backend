import { Post } from '../../../db/models'

const postQueries = {
  posts: async () => await Post.find(),
  post: async (_, { id }) => await Post.findById(id)
}

export default postQueries
