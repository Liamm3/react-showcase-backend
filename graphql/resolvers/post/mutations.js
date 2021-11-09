import { Post } from '../../../db/models'

const postMutations = {
  createPost: async (_, { post }) => {
    const newPost = new Post(post)
    return await newPost.save()
  },
  updatePost: async (_, { id, post }) => {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        $set: { ...post }
      },
      {
        new: true
      }
    )
    return updatedPost
  }
}

export default postMutations
