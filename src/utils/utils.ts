import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import path from 'path'

const PROTO_LOC = path.join(__dirname, '../Protobuf/Mumble.proto')


const packageDefinition = protoLoader.loadSync(
    PROTO_LOC,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
});


export default grpc.loadPackageDefinition(packageDefinition);