import { userMutations, userQueries } from './user'
import { postMutations, postQueries, postFields } from './post'
import { groupQueries } from './group'

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
    ...groupQueries
  },
  Mutation: {
    ...userMutations,
    ...postMutations
  },
  ...postFields
}

export default resolvers
