import { importSchema } from 'graphql-import';
import * as path from 'path';

export const typeDefs = importSchema(path.join(__dirname, './schema.graphql'));
