
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
    Update(connection);
    Del(connection);
  })
  
// //search
function Despesas(conn){
router.get('/lista', (req, res) =>{
    query = 'SELECT * FROM Grana';
    conn.query(query, function (error, results, fields){
        if(error) return console.log(error);
        //Pego o nome das rows do sql
        Object.keys(results).forEach(function(key) {
          var rows = results[key];
          var dt_fim = rows.dt_fim;
          var valor = rows.quantidade;
          if (dt_fim!=null){
          const controller = require('./controller');
          dt_fim_tratada = controller.transformDate(dt_fim,valor)
          rows.dt_fim = dt_fim_tratada[4];
          rows.dia = dt_fim_tratada[0];
          rows.mes = dt_fim_tratada[1];
          rows.valor_dia = dt_fim_tratada[3];
          rows.valor_mes = dt_fim_tratada[2];
          }
        });
        return res.send(results);
    });
})
}
function Update(conn){
  router.post('/lista-up', (req, res) =>{
    const nome = req.body.nome;
    const quantidade = parseInt(req.body.quantidade);
    const dt_fim = req.body.dt_fim;
    console.log("Data" + dt_fim);
    const id = req.body.id;
    query = `update Grana set nome = '${nome}', quantidade = '${quantidade}' , dt_fim = '${dt_fim}' where id=`+ id;
    conn.query(query, function (error, results, fields){
        if(error) return console.log(error);
        console.log('update  was made!');
    });
    return res.redirect('/Home');
});
}
//del
function Del(conn){
router.post('/lista-del', (req, res) =>{
    const id = req.body.id;
    console.log("id"+ req.value);
    query = 'delete from  Grana WHERE id =' + id;
    conn.query(query, function (error, results, fields){
      if(error) return console.log(error);
      console.log('delete  was made!');
  });
  return res.redirect('/Home');
});
}
//add
function add(conn){
    router.post('/lista-add', (req, res) =>{
        console.log(req.body.nome, req.body.quantidade, req.body.id);
        const nome = req.body.nome;
        const quantidade = req.body.quantidade;
        const dt_fim = req.body.dt_fim;
        const id = req.body.id;
        const query = `insert into Grana(nome, quantidade, dt_fim) values('${nome}','${quantidade}','${dt_fim}')`;
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            console.log('insert was made!');
        });
        return res.redirect('/Despesas');
    });
}
