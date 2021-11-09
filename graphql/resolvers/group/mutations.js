import { Group } from '../../../db/models'

const groupMutations = {
  createGroup: async (_, { group }, { loaders }) => {
    const newGroup = new Group(group)
    const savedGroup = await newGroup.save()
    return loaders.group.one(savedGroup._id)
  },
  updateGroup: async (_, { id, group }, { loaders }) => {
    await Group.findByIdAndUpdate(
      id,
      {
        $set: { ...group }
      },
      {
        new: true
      }
    )
    return loaders.group.one(id)
  }
}

export default groupMutations
