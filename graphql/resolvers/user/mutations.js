import { User, MemberOf } from '../../../db/models'

const userMutations = {
  createUser: async (_, { user }) => {
    const newUser = new User(user)
    return newUser.save()
  },
  updateUser: async (_, { id, user }) => {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { ...user }
      },
      {
        new: true
      }
    )
    return updatedUser
  },
  addUserToGroup: async (_, { id, group }) => {
    const user = await User.findById(id)

    if (user) {
      const memberOf = new MemberOf({ group, user: id })
      await memberOf.save()
    }

    return user
  }
}

export default userMutations
