import { shield, rule } from 'graphql-shield'

const isAuthenticated = rule()((_, args, { user }) => user !== null)

const isReadingOwnUser = rule()((_, { id }, { user }) => user && user.id === id)

export default shield({
  Query: {
    viewer: isAuthenticated,
    user: isReadingOwnUser
  }
})
