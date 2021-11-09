import { User, MemberOf } from '../../../db/models'

const userMutations = {
  createUser: async (_, { user }, { loaders }) => {
    const newUser = new User(user)
    const savedUser = await newUser.save()
    return loaders.user.one(savedUser._id)
  },
  updateUser: async (_, { id, user }, { loaders }) => {
    await User.findByIdAndUpdate(
      id,
      {
        $set: { ...user }
      },
      {
        new: true
      }
    )
    return loaders.user.one(id)
  },
  addUserToGroup: async (_, { id, group }, { loaders }) => {
    const user = await User.findById(id)

    if (user) {
      const memberOf = new MemberOf({ group, user: id })
      await memberOf.save()
    }

    return loaders.user.one(id)
  }
}

export default userMutations
