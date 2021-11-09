import { Group, MemberOf } from '../../../db/models'

const userFields = {
  User: {
    groups: async user => {
      const membersOf = await MemberOf.find({ user: user.id })

      const groups = await Group.find({
        _id: {
          $in: membersOf.map(({ group }) => group)
        }
      })

      return groups
    }
  }
}

export default userFields
