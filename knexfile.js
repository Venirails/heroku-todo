const options = process.env.NODE_ENV === 'production' ?



 {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'react_todo',
      user:     'postgres',
      password: 'rails'
    }
  }:
  
 
  {
    client: 'postgresql',
    connection: 'postgres://127.0.0.1:5432/react-todo-heroku'
   
  }

module.exports = options;
