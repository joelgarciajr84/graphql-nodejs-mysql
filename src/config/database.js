const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);
module.exports = knex

