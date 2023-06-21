// Import necessary dependencies and modules
import { ApolloServer } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server';

// Import your GraphQL schema and resolvers
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import {ADD_CLIENT} from "./clientMutations";

// Create the ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a test client for making GraphQL requests
const { mutate } = createTestClient(server);

// Write your Jest test
describe('addClient Mutation', () => {
  it('should add a new client', async () => {
    // Define the input variables for the mutation
    const variables = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
    };


    // Execute the mutation
    const { data } = await mutate({
      mutation: ADD_CLIENT,
      variables,
    });

    // Assert the expected result
    expect(data).toMatchObject({
      addClient: {
        id: expect.any(String),
        name: variables.name,
        email: variables.email,
        phone: variables.phone,
      },
    });
  });
});
