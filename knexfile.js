const options = process.env.NODE_ENV === 'production' ?
{
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: {
      "require": true,
      "rejectUnauthorized": false
    }
  } :


 {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'react_todo',
      user:     'postgres',
      password: 'rails'
    }
  }
  
 
  

module.exports = options;
