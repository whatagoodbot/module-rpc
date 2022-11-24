export class Statistics {
  constructor (clientCreds, proto) {
    this.statisticsService = new proto.Statistics(`${process.env.HOST_SERVICE_STATISTICS}:${process.env.PORT_RPC_SERVICE_STATISTICS}`, clientCreds)
  }
  getThemeWinner (room, quickTheme) {
    return new Promise(resolve => {
      this.statisticsService.getThemeWinner({ room, quickTheme }, (error, response) => {
        if (error) console.error(error)
        resolve(response)
      })
    })
    }
}
