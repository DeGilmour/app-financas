
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');

app.listen(8081, () => {
    console.log('CORS-enabled web server listening on port 8081')
  })

var https = require('https');
https.createServer(app).listen(443);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'works' }));
app.use('/', router);
app.listen(port);

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'appfina'
});

connection.connect(function(err){
    if(err) return console.log(err);
    add(connection);
    Despesas(connection);
  })
  
// //search
function Despesas(conn){
router.get('/lista', (req, res) =>{
    let filter = '';
    // filter = ' WHERE ID=' + 2;
    // query = 'SELECT * FROM Grana' + filter;
    query = 'SELECT * FROM Grana';
    conn.query(query, function (error, results, fields){
        if(error) return console.log(error);
        //Pego o nome das rows do sql
        var result;
        Object.keys(results).forEach(function(key) {
          var rows = results[key];
          var dt_fim = rows.dt_fim;
          const controller = require('./controller');
          result = controller.transformDate(dt_fim)
          rows.dt_fim = result;
        });
        console.log(results)
        return res.send(results);
    });
})
}
// //del
// router.delete('/lista/:id', (req, res) =>{
//     execSQLQuery('DELETE FROM Grana WHERE ID=' + parseInt(req.params.id), res);
// })
//add
function add(conn){
    router.post('/lista-add', (req, res) =>{
        console.log(req.body.nome, req.body.quantidade, req.body.id);
        const nome = req.body.nome;
        const quantidade = req.body.quantidade;
        const dt_fim = req.body.dt_fim;
        const id = req.body.id;
        const query = `INSERT INTO Grana(nome, quantidade, dt_fim) VALUES('${nome}','${quantidade}','${dt_fim}')`;
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            console.log('insert was made!');
        });
        return res.redirect('/Home');
    });
}
