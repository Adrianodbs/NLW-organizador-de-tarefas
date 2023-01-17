import Fastify from "fastify";

const app = Fastify()

app.get('/', ()=>{
  return 'Oi 5'
})

app.listen({
  port:3333
})