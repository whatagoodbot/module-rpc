export class Strings {
  constructor (clientCreds, proto) {
    this.stringService = new proto.Strings(`${process.env.HOST_BOT_GROUPIE}:${process.env.PORT_RPC_BOT_GROUPIE}`, clientCreds)
  }
  get (string) {
    return new Promise(resolve => {
      this.stringService.getString({ string }, (error, response) => {
        resolve(response)
      })
    })
  }
  getMany (strings) {
    return new Promise(resolve => {
      this.stringService.getManyStrings({ strings }, (error, response) => {
        const strings = {}
        response.strings.forEach(string => {
          strings[string.name] = string.value
        })
        resolve(strings)
      })
    })
  }
  getAll () {
    return new Promise(resolve => {
      this.stringService.getString({ string }, (error, response) => {
        const strings = {}
        response.strings.forEach(string => {
          strings[string.name] = string.value
        })
        resolve(strings)
      })
    })
  }
}

