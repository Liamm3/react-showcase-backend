import express from 'express'
import graphqlServer from './graphql'
import expressJwt from 'express-jwt'

import { secret } from './config/environment'

const app = express()

app.use(
  expressJwt({
    secret,
    algorithms: ['HS256'],
    credentialsRequired: false
  })
)

graphqlServer.applyMiddleware({
  app
})

export default app
