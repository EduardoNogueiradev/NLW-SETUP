import Fastify from "fastify";

const app = Fastify()

app.get('/', () =>{
    return 'Hello nlw'
})

app.get('/teste', () =>{
    return 'Hello teste'
})


app.listen({
    port: 3333,
})