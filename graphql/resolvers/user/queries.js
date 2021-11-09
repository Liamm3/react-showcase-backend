import { User } from '../../../db/models'

const userQueries = {
  users: async () => await User.find(),
  user: async (_, { id }) => await User.findById(id)
}

export default userQueries
