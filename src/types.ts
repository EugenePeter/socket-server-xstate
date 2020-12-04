export { Socket, Server } from 'socket.io'

export interface ServerContext {
    retries: number,
    server: null | Socket,
    server_host: string,
    server_port: number,
    socket_connection: null | Socket,
    session_data: number | string,
    session_controls: null
}