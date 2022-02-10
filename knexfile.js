const options = process.env.NODE_ENV === 'production' ?
{
    client: 'pg',
    connection: ' postgres://imiyumklzcefcj:0f000c9341da24e88800352dea2d38b7753a6dd55007c7fa590f267feba41cc4@ec2-34-205-46-149.compute-1.amazonaws.com:5432/d1j5k398ak7s5a'
   
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
