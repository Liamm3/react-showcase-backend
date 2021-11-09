import { connection } from 'mongoose'
import { readFileSync } from 'fs'

import connectDB from '..'
import { Post, Tag, User } from '../models'

const seed = async () => {
  console.log('Cleaning database')

  await connectDB()
  await connection.dropDatabase()

  console.log('Database clean')
  const rawUsers = readFileSync(__dirname + '/../mock/users.json')
  const users = JSON.parse(rawUsers).map(user => new User(user))

  const rawPosts = readFileSync(__dirname + '/../mock/posts.json')
  const posts = JSON.parse(rawPosts).map(post => {
    const randomIndex = Math.floor(Math.random() * users.length)
    return new Post({ ...post, user: users[randomIndex]._id })
  })

  const saves = [
    ...users.map(user => user.save()),
    ...posts.map(post => post.save())
  ]
  await Promise.all(saves)

  console.log('Database seeded')

  connection.close()
}

seed()
