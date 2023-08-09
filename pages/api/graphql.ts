import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { typeDefs, resolvers } from "../../modal/schema";

const apolloServer = new ApolloServer({
  typeDefs, 
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  
  const context = { req, res };
  await apolloServer.createHandler({
    path: '/api/graphql',}
  )(req, res);
}
