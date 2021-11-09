import { User, MemberOf } from '../../../db/models'

const groupFields = {
  Group: {
    users: async group => {
      const membersOf = await MemberOf.find({ group: group.id })

      const users = await User.find({
        _id: {
          $in: membersOf.map(({ user }) => user)
        }
      })

      return users
    }
  }
}

export default groupFields
