import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

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

export const config = grpc.loadPackageDefinition(protoLoader.loadSync('./src/protos/config.proto', protoOptions))
export const strings = grpc.loadPackageDefinition(protoLoader.loadSync('./src/protos/strings.proto', protoOptions))
export const users = grpc.loadPackageDefinition(protoLoader.loadSync('./src/protos/users.proto', protoOptions))
