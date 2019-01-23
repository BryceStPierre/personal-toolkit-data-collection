const { Pool } = require('pg');
require('dotenv').config();

const CONNECTION_STRING = process.env.DATABASE_URL 
  || `postgresql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@localhost:5432/${process.env.DATABASE_NAME}`
const SSL = process.env.NODE_ENV === 'production';

class Database {
  constructor () {
    this._pool = new Pool({
      connectionString: CONNECTION_STRING,
      ssl: SSL
    });

    this._pool.on('error', (err, client) => {
      console.error('Error: PostgreSQL client.', err);
      process.exit(-1);
    });
  }

  query (queryString, ...args) {
    this._pool.connect((err, client, done) => {
      if (err) throw err;

      if (args.length < 1) {
        console.error('Error: PostgreSQL query method must be passed callback.');
        process.exit(-1);
      }

      const parameters = args.length === 2 ? args[0] : [];
      const callback = args.length === 1 ? args[0] : args[1];

      client.query(queryString, parameters, (err, res) => {
        done();
        if (err) {
          console.error('Error', err.stack);
          return callback({ message: 'Error: querying database.' }, null);
        }
        callback(null, res.rows);
      });
    });
  }

  end () {
    this._pool.end();
  }
}

module.exports = new Database();