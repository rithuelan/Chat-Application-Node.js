import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers.js";

const typeDefs = gql`
  type Message { id: ID!, text: String }
  type Query { messages: [Message] }
  type Subscription { messageAdded: Message }
`;

export async function startGraphQL(app, server) {
  const apollo = new ApolloServer({ typeDefs, resolvers });
  await apollo.start();
  apollo.applyMiddleware({ app });
}

