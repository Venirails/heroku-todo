const options = process.env.NODE_ENV === 'production' ?
{
    client: 'pg',
    connection: 'postgres://127.0.0.1:5432/react-todo-heroku'
   
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
