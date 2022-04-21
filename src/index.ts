// export function hello_world(name: string) {
//     console.log(`Hello ${name}`)
// }

import utils from './utils/utils'

interface Connection {
    url: string,
    port: number,
    username: string,
    password: string
}

export function connect(url: string, port: number, username: string, password: string)   {
    console.log(utils)
}

