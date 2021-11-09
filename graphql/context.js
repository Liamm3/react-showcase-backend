import DataLoader from 'dataloader'

import { Group, Post, User } from '../db/models'

const createLoader = Model => {
  const loader = new DataLoader(async keys => {
    const data = await Model.find({ _id: { $in: keys } })

    const dataMap = data.reduce((acc, curr) => {
      acc[curr._id] = curr
      return acc
    }, {})

    return keys.map(id => dataMap[id])
  })

  return {
    one: async id => loader.load(id.toString()),
    many: async ids => loader.loadMany(ids.map(id => id.toString()))
  }
}

const context = async () => {
  const loaders = {
    user: createLoader(User),
    post: createLoader(Post),
    group: createLoader(Group)
  }

  return { loaders }
}

export default context
