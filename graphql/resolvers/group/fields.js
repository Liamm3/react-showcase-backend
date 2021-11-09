import { User, MemberOf } from '../../../db/models'

const groupFields = {
  Group: {
    users: async (group, _, { loaders }) => {
      const membersOf = await MemberOf.find({ group: group.id })

      const users = await User.find({
        _id: {
          $in: membersOf.map(({ user }) => user)
        }
      })

      return loaders.user.many(users.map(({ id }) => id))
    }
  }
}

export default groupFields
