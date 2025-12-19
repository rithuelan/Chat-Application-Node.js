// graphql/resolvers.js
import DataLoader from "dataloader";

const messages = [{ id: 1, text: "Hello" }];

const loader = new DataLoader(async (ids) =>
  ids.map(id => messages.find(m => m.id === id))
);

export const resolvers = {
  Query: {
    messages: () => messages
  }
};
