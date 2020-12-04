
import { Machine, interpret } from 'xstate'
import { config } from './machine/config'
import {implementation} from './machine/implementation'


const ServerMachine = Machine(config, implementation)
const ServerService = interpret(ServerMachine).onTransition((state) => {
    console.log('%c 🍮 state: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', state.value)
    // console.log('%c 🍿 context: ', 'font-size:20px;background-color: #B03734;color:#fff;', state.context);
})


ServerService.start()
