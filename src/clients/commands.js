export class Commands {
  constructor (clientCreds, proto) {
    this.commandService = new proto.Commands(`${process.env.HOST_BOT_GROUPIE}:${process.env.PORT_RPC_BOT_GROUPIE}`, clientCreds)
  }
  get (room) {
    return new Promise(resolve => {
      this.commandService.getAllCommands({ room }, (error, response) => {
        if (error) console.error(error)
        resolve(response)
      })
    })
  }
}
