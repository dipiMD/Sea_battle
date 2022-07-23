"use strict";

var pg = require('pg');

var Pool = pg.Pool;
var pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'database_development'
});
module.exports = pool;