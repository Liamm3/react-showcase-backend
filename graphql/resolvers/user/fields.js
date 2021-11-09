import { MemberOf, Post } from '../../../db/models'

const userFields = {
  User: {
    groups: async (user, _, { loaders }) => {
      const membersOf = await MemberOf.find({ user: user.id })
      return loaders.group.many(membersOf.map(({ group }) => group))
    },
    posts: async (user, _, { loaders }) => {
      const posts = await Post.find({ user: user.id })
      return loaders.post.many(posts.map(({ id }) => id))
    }
  }
}

export default userFields
