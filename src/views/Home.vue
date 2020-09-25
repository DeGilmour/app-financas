<template>
  <div  class="home">
  
    <p>Fique atento para não ficar no vermelho!</p>
    <div id="search">
    <table>
      <tr>
        <td>Receitas: </td>
        <td class="valor-positivo">R$3000</td>
      </tr>
      
      <tr>
        <td>Despesas: </td>
        <td class="valor-negativo">R$1.500</td>
      </tr>

      
      <tr>
        <td>Resto: </td>
        <td>R$500</td>
      </tr>
    </table>
    </div>
    

    <div class="btn-links">
      <nav>
        <ul>
          <li><a href="#">Nova despesa</a></li>
          <li><a href="#">Nova receita</a></li>
        </ul>
      </nav>
    </div>

  
  <div id="app-vue">
      <form @submit="formSubmit">
        <input type="text" style="opacity: 0.84; width: 200px;" v-model="nome" placeholder="Digite aqui o nome do objetivo">
        <input type="text" style="opacity: 0.84; width: 200px;" v-model="quantidade" placeholder="Digite aqui o valor">
        <label for="data">Até quando?</label>
        <input type="date" v-model="dt_fim" >

        <button type="submit" >Cadastrar</button>
      </form>
  </div>
    

  </div>
</template>
<script type="text/javascript" src="https://www.turnjs.com/lib/turn.min.js "></script> 

<script>

const axios = require('axios')

// axios.get('http://localhost:3000/lista')
//   .then((response) => {
//     console.log(response.data)
//   });
 export default {
        mounted() {
        },
        data() {
            return {
              nome: '',
              quantidade : '',
              dt_fim : ''
            };
        },
       
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                this.axios.post('http://localhost:3000/lista-add', {
                    nome: this.nome,
                    quantidade : this.quantidade,
                    dt_fim : this.dt_fim
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
    }
</script>


<style>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}
.home p{
  margin-bottom: 15px;
}
.home table{
  border-collapse: collapse;
  width: 50%;
  margin-bottom: 25px;
}
.home table td{
  border: 1px solid #dddddd;
  padding: 5px;
}
.btn-links{
  width: 70%;
}
.btn-links nav ul{
  display: flex;
  justify-content: space-evenly;
}
.btn-links nav ul a{
  color: rgb(17, 204, 193);
  padding: 3px 8px;
  border: 1px solid rgb(17, 204, 193);
  border-radius: 12px;
  transition: 0.1s;
}
.btn-links nav a:hover{
  color: #fff;
  background-color: rgb(17, 204, 193);
}
.form{
  width: 70%;
  display: none;
}
.form form{
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form form input[type=text]{
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid rgb(17, 204, 193);
  border-radius: 5px;
  background: transparent;
}
.form form label{
  margin-bottom: 5px;
}
.form form input[type=date]{
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin-bottom: 15px;
}
.form form button{
  color: #FFF;
  background-color: rgb(17, 204, 193);
  border: none;
  padding: 3px 8px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
