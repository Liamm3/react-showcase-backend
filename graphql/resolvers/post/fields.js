const postFields = {
  Post: {
    user: ({ user }, _, { loaders }) => loaders.user.one(user)
  }
}

export default postFields
