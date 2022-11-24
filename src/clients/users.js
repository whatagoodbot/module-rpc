export class Users {
  constructor (clientCreds, proto) {
    this.userService = new proto.Users(`${process.env.HOST_SERVICE_USERS}:${process.env.PORT_RPC_SERVICE_USERS}`, clientCreds)
  }
  get (id) {
    return new Promise(resolve => {
      this.userService.getUser({ id }, (error, response) => {
        if (error) console.error(error)
        resolve(response)
      })
    })
  }
}
