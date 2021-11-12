import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

import resolvers from './resolvers'
import permissions from './permissions'

const gqlFiles = readdirSync(join(__dirname, './typedefs'))

let typeDefs = ''

gqlFiles.forEach(file => {
  typeDefs += readFileSync(join(__dirname, './typedefs', file), {
    encoding: 'utf8'
  })
})

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default applyMiddleware(schema, permissions)
