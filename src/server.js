import { GraphQLServer } from 'graphql-yoga';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => console.log('Server is running on localhost:' + options.port)); // eslint-disable-line
