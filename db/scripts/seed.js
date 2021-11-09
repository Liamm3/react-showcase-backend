import { connection } from 'mongoose'
import { readFileSync } from 'fs'

import connectDB from '..'
import { Group, MemberOf, Post, Tag, User } from '../models'

const seed = async () => {
  console.log('Cleaning database')

  await connectDB()
  await connection.dropDatabase()

  console.log('Database clean')

  const rawGroups = readFileSync(__dirname + '/../mock/groups.json')
  const groups = JSON.parse(rawGroups).map(group => new Group(group))

  const rawUsers = readFileSync(__dirname + '/../mock/users.json')
  const users = JSON.parse(rawUsers).map(user => new User(user))

  const rawPosts = readFileSync(__dirname + '/../mock/posts.json')
  const posts = JSON.parse(rawPosts).map(post => {
    const randomIndex = Math.floor(Math.random() * users.length)
    return new Post({ ...post, user: users[randomIndex]._id })
  })

  let memberOf = []
  for (let i = 0; i < Math.floor(users.length / 2); i++) {
    const randomUserIndex = Math.floor(Math.random() * users.length)
    const randomGroupIndex = Math.floor(Math.random() * groups.length)
    memberOf.push(
      new MemberOf({
        user: users[randomUserIndex]._id,
        group: groups[randomGroupIndex]._id
      })
    )
  }

  const saves = [
    ...users.map(user => user.save()),
    ...posts.map(post => post.save()),
    ...groups.map(group => group.save()),
    ...memberOf.map(memberOf => memberOf.save())
  ]
  await Promise.all(saves)

  console.log('Database seeded')

  connection.close()
}

seed()
