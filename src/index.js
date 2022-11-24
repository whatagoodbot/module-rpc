import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { Commands } from './clients/commands.js'
import { Rooms } from './clients/rooms.js'
import { Strings } from './clients/strings.js'
import { Users } from './clients/users.js'
import { Themes } from './clients/themes.js'
import { Statistics } from './clients/statistics.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const protoOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

export const server = new grpc.Server()
export const serverCreds = grpc.ServerCredentials.createInsecure()
export const clientCreds = grpc.credentials.createInsecure()

export const commands = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/bot-groupie/commands.proto`, protoOptions))
export const rooms = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/bot-groupie/rooms.proto`, protoOptions))
export const strings = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/bot-groupie/strings.proto`, protoOptions))
export const users = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/service-users/users.proto`, protoOptions))

export const themes = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/themes.proto`, protoOptions))
export const statistics = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/statistics.proto`, protoOptions))

export const album = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/album.proto`, protoOptions))
export const artist = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/artist.proto`, protoOptions))
export const wiki = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/wiki.proto`, protoOptions))

export const clients = {
  commands: new Commands(clientCreds, commands),
  rooms: new Rooms(clientCreds, rooms),
  strings: new Strings(clientCreds, strings),
  themes: new Themes(clientCreds, themes),
  users: new Users(clientCreds, users),
  statistics: new Statistics(clientCreds, statistics)
}