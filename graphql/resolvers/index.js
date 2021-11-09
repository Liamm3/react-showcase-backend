import { userMutations, userQueries, userFields } from './user'
import { postMutations, postQueries, postFields } from './post'
import { groupQueries, groupMutations, groupFields } from './group'

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
    ...groupQueries
  },
  Mutation: {
    ...userMutations,
    ...postMutations,
    ...groupMutations
  },
  ...postFields,
  ...userFields,
  ...groupFields
}

export default resolvers
