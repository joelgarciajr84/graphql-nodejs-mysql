const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = require('./api/schema');
require('dotenv').config()


const app = express();
app.use('/api', graphqlHTTP({
    schema, 
    graphiql: true
}))

app.listen(4000, () => console.log('Running graphql-nodejs-api'))