import { Group } from '../../../db/models'

const groupQueries = {
  groups: async () => await Group.find(),
  group: async (_, { id }) => await Group.findById(id)
}

export default groupQueries
