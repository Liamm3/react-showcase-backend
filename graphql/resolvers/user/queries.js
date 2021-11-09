import { User } from '../../../db/models'

const userQueries = {
  users: async (_, args, { loaders }) => {
    const users = await User.find()
    return loaders.user.many(users.map(({ id }) => id))
  },
  user: (_, { id }, { loaders }) => loaders.user.one(id)
}

export default userQueries
