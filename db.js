const mysql = require('mysql2/promise');

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected') return global.connection;
    const connectionString = 'mysql://root:root@localhost:3306/crud';
    const connection = await mysql.createConnection(connectionString);
    console.log('connected in MySQL!');
    global.connection = connection;
    return global.connection;
}
connect();

module.exports = {connect}