import { userMutations, userQueries } from './user'
import { postMutations, postQueries, postFields } from './post'

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries
  },
  Mutation: {
    ...userMutations,
    ...postMutations
  },
  ...postFields
}

export default resolvers
