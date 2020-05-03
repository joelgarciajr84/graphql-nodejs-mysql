# Hi, this is a example of how to provide a GraphqL endpoint using nodejs + MySQL.

<img src="https://graphql.org/img/logo.svg" alt="drawing" width="200"/>

From the official website:


>    A query language for your API GraphQL is a query language for APIs
>    
> and a runtime for fulfilling those queries with your existing data.
> GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Tools( libs)  that I used in this repo:



1. Knex.js 
    1. **"Knex.js** is a "batteries included" SQL query builder for **Postgres**, **MSSQL**, **MySQL**, **MariaDB**, **SQLite3**, **Oracle**, and **Amazon Redshift** designed to be flexible, portable, and fun to use. It features both traditional node style [callbacks](http://knexjs.org/#Interfaces-Callbacks) as well as a [promise](http://knexjs.org/#Interfaces-Promises) interface for cleaner async flow control, [a stream interface](http://knexjs.org/#Interfaces-Streams), full featured [query](http://knexjs.org/#Builder) and [schema](http://knexjs.org/#Schema) builders, **[transaction support (with savepoints)](http://knexjs.org/#Transactions)**, connection [pooling](http://knexjs.org/#Installation-pooling) and standardized responses between different query clients and dialects."
2. ExpressJS
    2. "Fast, unopinionated, minimalist web framework for Node.js"
3. graphiql:
    3. Graphic query editor

So, what this is example is all about?

In this repo we simulate a company database with customers and orders tables, and a web nodejs project which exposes a GraphQL endpoint.

Let's jump  to it

### You must have MySQL installed

1. Clone this repo `git clone https://github.com/joelgarciajr84/grapqhl-nodejs-mysql `
2. run npm install `npm i`
3. cd to src folder and create your .env file with the settings:
4. `DB_NAME DB_HOST
DB_USER
DB_PASS`
5. run `knex migrate:latest `
6. run project with `node server.js`
7. open the browser in `[http://localhost:4000/api]`(http://localhost:4000/api)

This is it!
