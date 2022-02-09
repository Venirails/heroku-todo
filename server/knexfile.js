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
    client: 'postgresql',
    connection: {
      // host: 'postgres://localhost/test',
      database: 'react-todo-heroku',
      //user:     'postgres',
      //password: 'rails'
    },
  }
};