import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT

const env = {
  development: process.env.NODE_ENV === 'development',
  production: process.env.NODE_ENV === 'production'
}

const mongo = {
  url: process.env.MONGO_URI
}

const secret = process.env.SECRET

export { port, env, mongo, secret }
