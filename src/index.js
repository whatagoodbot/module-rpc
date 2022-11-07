import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

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

export const album = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/album.proto`, protoOptions))
export const artist = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/artist.proto`, protoOptions))
export const commands = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/commands.proto`, protoOptions))
export const config = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/config.proto`, protoOptions))
export const strings = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/strings.proto`, protoOptions))
export const users = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/users.proto`, protoOptions))
export const wiki = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/wiki.proto`, protoOptions))
export const themes = grpc.loadPackageDefinition(protoLoader.loadSync(`${__dirname}/protos/themes.proto`, protoOptions))
