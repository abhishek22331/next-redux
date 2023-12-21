// graphql.js
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typeDefs, resolvers } from './modal/schema';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

export default app;
