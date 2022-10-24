import { server, serverCreds, users } from '../src/index.js'

const getUser = async (call, callback) => {
  if (call?.request && call?.request?.id) {
    const user = {
      id: '1',
      name: 'notABluesSinger',
      lastWelcomed: '',
      lastDisconnected: ''
    }
    callback(null, user)
  } else {
    callback(null, null)
  }
}

const getUsers = async (call, callback) => {
  if (call?.request) {
    const users = {users: [{
      id: '1',
      name: 'notABluesSinger',
      lastWelcomed: '',
      lastDisconnected: ''
    }]}
    callback(null, users)
  } else {
    callback(null, null)
  }
}

server.addService(users.UserService.service, {
  getUser,
  getUsers
})

server.bindAsync('0.0.0.0:50051', serverCreds, () => {
  server.start()
})
