import { port } from './config/environment'
import app from './app'
import connectDB from './db'

const start = async () => {
  try {
    console.log('Connecting to database')
    await connectDB()
    console.log('Connected to database')

    await app.listen(port)
    console.log(`GraphQL server running at port: ${port}`)
  } catch (err) {
    console.log(err)
    console.log('Not able to run GraphQL server')
  }
}

start()
