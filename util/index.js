import { sign } from 'jsonwebtoken'
import { secret } from '../config/environment'

export const getToken = ({ id, username, email }) =>
  sign(
    {
      id,
      username,
      email
    },
    secret,
    { expiresIn: '1d' }
  )
