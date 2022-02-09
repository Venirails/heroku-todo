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
  connection: 'postgresql://postgres:postgres@localhost:5432/react-todo-heroku?ssl=true',
  migrations: {
    directory: './db/migrations'
  },
  useNullAsDefault: true
}

};