import { EventEmitter } from 'events'
import { MachineOptions } from 'xstate'
import { assign } from 'xstate'
import {ServerContext} from '../../types'
import {services} from './services'
export const implementation: MachineOptions<ServerContext, any> = {
    actions: {
        logInitializingServer: () => console.log("@======== INITIALZING SERVER ========="),
        serverCreated: assign({
            server: (_, event) => {
                return event.payload
            }
        }),
        logServerCreated: () => console.log("@======== SERVER STARTED ========="),

        assignSocketToContext: assign({
            socket_connection: (_, event) => event.payload
        }),
        
        logSocketStarted: () => console.log("@======== SOCKET STARTED ========="),


    },
    activities: {},
    delays: {},
    guards: {},
    services
}