import { ApolloServer } from 'apollo-server'
import typeDefs from './schema.js'
import resolvers from './resolver.js'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*',
    credentials: true   
  }
})

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})