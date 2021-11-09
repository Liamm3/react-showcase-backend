import { Group } from '../../../db/models'

const groupMutations = {
  createGroup: async (_, { group }) => {
    const newGroup = new Group(group)
    return newGroup.save()
  },
  updateGroup: async (_, { id, group }) => {
    const updatedGroup = await Group.findByIdAndUpdate(
      id,
      {
        $set: { ...group }
      },
      {
        new: true
      }
    )
    return updatedGroup
  }
}

export default groupMutations
