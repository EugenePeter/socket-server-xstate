import express, { Application } from 'express'
import http from 'http'
import cors from 'cors'
require('dotenv').config()

import { ServerContext } from '../../types'

export const services = {
    intializeServer: (context: ServerContext): any => (send: any) => {
        const app: Application = express()
        const server = http.createServer(app)
        app.use(cors())
        server.listen(process.env.PORT || 3030, () => {
            console.log(`Server started at port: ${process.env.PORT}`)
            send({ type: 'ASSIGN_SERVER_TO_CONTEXT', payload: server });
        })
    },

    intializeSocket: (context: ServerContext): any => (send: any) => {
        const { server } = context
        const io = require('socket.io')(server)
        // require("../../sockets")(io)
        send({ type: 'ASSIGN_SOCKET_TO_CONTEXT', payload: io })
    },

    socketEvents: (context: ServerContext): any => {
        const { socket_connection } = context

        socket_connection.on('connection', async (socket: any) => {
            console.log(`New connection from  >>>`, socket.id)
            
            socket.on("request", (data: any) => {
                console.log('%c 🍛 data: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', data);
            })
        })
    }

}