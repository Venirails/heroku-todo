module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      // host: 'postgres://localhost/test',
      database: 'react_todo',
      user:     'postgres',
      password: 'rails'
    },
  },
 
production: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
    },
    pool: {
      min: 2,
      max: 10,
    },
    
  },

};