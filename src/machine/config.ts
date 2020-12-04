import { context } from './contex'

export const config = {
    id: 'serverMachine',
    initial: 'idle',
    context,
    states: {
        idle: {
            entry: ['logInitializingServer'],
            invoke: [{
                id: 'intializeServer',
                src: 'intializeServer'
            }],
            on: {
                ASSIGN_SERVER_TO_CONTEXT: {
                    actions: ['serverCreated'],
                    target: 'serverStarted'
                }
            }
        },
        serverStarted: {
            entry: ['logServerCreated'],
            invoke: [{
                id: 'intializeSocket',
                src: 'intializeSocket'
            }],
            on: {
                ASSIGN_SOCKET_TO_CONTEXT: {
                    actions: 'assignSocketToContext',
                    target: 'socketStarted'
                }
            }
        },
        socketStarted: {
            entry: ['logSocketStarted'],
            invoke: [
                {
                    id: 'socketEvents',
                    src: 'socketEvents'
                }
            ]
        }
    }
}
