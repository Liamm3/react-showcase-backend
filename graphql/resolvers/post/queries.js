import { Post } from '../../../db/models'

const postQueries = {
  posts: async (_, args, { loaders }) => {
    const posts = await Post.find()
    return loaders.post.many(posts.map(({ id }) => id))
  },
  post: (_, { id }, { loaders }) => loaders.post.one(id)
}

export default postQueries
