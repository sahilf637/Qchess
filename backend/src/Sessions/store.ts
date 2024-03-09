import { createClient } from "redis";


const sessionStore = async () => {
    const password = process.env.RPASSWORD
    const client = createClient({
        password: password,
        socket: {
            host: 'redis-14157.c267.us-east-1-4.ec2.cloud.redislabs.com',
            port: 14157
        }
    })

    client.on("error", error => console.log("Error Connecting to redis", error));

    client.on("connect", () => console.log("Successfully connected to redis"));

    await client.connect()
    
    return client
}

const client = sessionStore()

export default client



