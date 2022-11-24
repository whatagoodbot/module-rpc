export class Themes {
  constructor (clientCreds, proto) {
    this.themeService = new proto.Themes(`${process.env.HOST_SERVICE_THEMES}:${process.env.PORT_RPC_SERVICE_THEMES}`, clientCreds)
  }
  get (room) {
    return new Promise(resolve => {
      this.themeService.getCurrentTheme({ room }, (error, response) => {
        if (error) console.error(error)
        resolve(response)
      })
    })
    }
}
