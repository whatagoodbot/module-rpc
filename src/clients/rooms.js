export class Rooms {
  constructor (clientCreds, proto) {
    this.roomService = new proto.Rooms(`${process.env.HOST_BOT_GROUPIE}:${process.env.PORT_RPC_BOT_GROUPIE}`, clientCreds)
  }
  getAll (client) {
    return new Promise(resolve => {
      this.roomService.getRooms({ client }, (error, response) => {
        if (error) console.error(error)
        resolve(response)
      })
    })
  }
  get (room) {
    return new Promise(resolve => {
      this.roomService.getRoom({ room }, (error, response) => {
        if (error) console.error(error)
        resolve(response)
      })
    })
  }
}
