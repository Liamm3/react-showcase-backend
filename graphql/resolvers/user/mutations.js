import { User, MemberOf } from '../../../db/models'
import { hash, compare } from 'bcryptjs'
import { AuthenticationError } from 'apollo-server-errors'

import { getToken } from '../../../util'

const userMutations = {
  register: async (_, { user }, { loaders }) => {
    const hashedPassword = await hash(user.password, 10)
    const newUser = new User({ ...user, password: hashedPassword })
    const savedUser = await newUser.save()
    return loaders.user.one(savedUser._id)
  },
  login: async (_, { email, password }) => {
    const user = await User.findOne({ email })

    if (!user) {
      throw new AuthenticationError('This user does not exist!')
    }

    const match = await compare(password, user.password)
    if (!match) {
      throw new AuthenticationError('Wrong password!')
    }
    return getToken(user)
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
