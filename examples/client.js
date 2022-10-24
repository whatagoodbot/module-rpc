import { clientCreds, users } from '../src/index.js'

const userService = new users.UserService('localhost:50051', clientCreds)

userService.getUsers({}, (error, response) => {
  if (error) console.log(error)
  console.log(response)
})
