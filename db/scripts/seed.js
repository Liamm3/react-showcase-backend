import { connection } from 'mongoose'
import { readFileSync } from 'fs'

import connectDB from '..'
import { User } from '../models'

const seed = async () => {
  console.log('Cleaning database')

  await connectDB()
  await connection.dropDatabase()

  console.log('Database clean')

  const rawUsers = readFileSync(__dirname + '/../mock/users.json')
  const users = JSON.parse(rawUsers).map(user => new User(user))

  const saves = [...users.map(user => user.save())]
  await Promise.all(saves)

  console.log('Database seeded')

  connection.close()
}

seed()
