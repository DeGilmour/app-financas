
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'appfina'
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('Nice!');
  createTable(connection);
})


function createTable(conn){
 
      const sql = "CREATE TABLE if not exists Produtos (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), tipo VARCHAR(255), valor int)";
      const sql1 = "CREATE TABLE if not exists Clientes (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255))";
      const sql2 = "CREATE TABLE if not exists Vendas (id INT AUTO_INCREMENT PRIMARY KEY, data_venda date, valor int )";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('the table has been made!');
      });
      conn.query(sql1, function (error, results, fields){
        if(error) return console.log(error);
        console.log('the table has been made!');
    });
    conn.query(sql2, function (error, results, fields){
        if(error) return console.log(error);
        console.log('the table has been made!');
    });
}