import { Post } from '../../../db/models'

const postMutations = {
  createPost: async (_, { post }, { loaders }) => {
    const newPost = new Post(post)
    const savedPost = await newPost.save()
    return loaders.post.one(savedPost._id)
  },
  updatePost: async (_, { id, post }, { loaders }) => {
    await Post.findByIdAndUpdate(
      id,
      {
        $set: { ...post }
      },
      {
        new: true
      }
    )
    return loaders.post.one(id)
  }
}

export default postMutations
