const Hapi = require('@hapi/hapi');

const mysql = require('mysql');
const pool = mysql.createPool({
  host     : 'localhost',
  port: 3306,
  user     : 'root',
  password : 'root',
  database : 'trashbin'
});

const executeQuery = (query, values = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(query, values, (error, results) => {
        connection.release();

        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  });
};
 
const init = async () => {
  try {
    console.log('mysql connected')

    const getHistoriesHandler = async (request, h) => {
      const histories = await executeQuery('SELECT * FROM history');

      return h.response(histories);
    }

    JSON.stringify
  
    const server = Hapi.server({
      port: 8000,
      host: 'localhost',
    });
  
    server.route([
      {
        method: 'GET',
        path: '/histories',
        handler: getHistoriesHandler,
      }
    ])
   
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (error) {
    console.log('error: ', error);
  }
};
 
init();
