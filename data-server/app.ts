import "reflect-metadata";
import { buildSchema } from "./type-graphql";
import { MongoClient } from 'mongodb'
import { UserResolver } from "./resolvers/user-resolver";
import { get as getConfig } from 'config'
import { graphql } from "graphql";
import * as Fastify from 'fastify'
const {graphiqlFastify} = require('fastify-graphql');
async function bootstrap() {
  let db;
  try {
    let client = await MongoClient.connect(getConfig("db.url"));
    db = await client.db(getConfig('db.database'));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile:'./schecma.gql'
  });

  const fastify = Fastify();

  fastify.post('/', (req, res) => {
    return graphql({ schema, source: req.body.query, contextValue: db })
  })
  fastify.register(graphiqlFastify, {
    prefix: '/',
    graphiql: {
      endpointURL: '/',
    }
  });
  fastify.listen(5000, (err) => {
    if (err) throw err;
    console.log('Server listenting on localhost:', fastify.server.address());
  });
}

bootstrap();
