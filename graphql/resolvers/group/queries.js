import { Group } from '../../../db/models'

const groupQueries = {
  groups: async (_, args, { loaders }) => {
    const groups = await Group.find()
    return loaders.group.many(groups.map(({ id }) => id))
  },
  group: (_, { id }, { loaders }) => loaders.group.one(id)
}

export default groupQueries
