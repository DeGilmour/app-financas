<template>
    <div class="despesas">

        <p class="titulo">Aqui estão suas despesas cadastradas!</p>

        
            <div v-for="value of values" v-bind:key="value.id">
            <p>Nome do Objetivo : {{value.nome}}</p>
            <span>Valor do Objetivo : R${{value.quantidade}}</span>
            <span>Data prevista para o termino : {{value.dt_fim}}</span>
            <span>Meses para o termino : {{value.mes}} e valor mensal : R${{value.valor_mes}}</span>
            <span>Dias para o termino : {{value.dia}} e valor diario : R${{value.valor_dia}}</span>
            
            <ul>
                <li><button class="btn-editar">Editar</button></li>
                <li><button class="btn-cancelar">Cancelar</button></li>
            </ul>
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
              values : {}
            };
        },
        created: function() {
        this.getVal();
      },

        methods: {
          getVal: function(){
            let this_ = this;
            this.axios.get('http://localhost:3000/lista')
            .then(res => {
              this.values = res.data;
              })
            .catch(function(err){
                console.log(err);
            })
      },
            
        }
    }
</script>

<style>
.despesas{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
}
.despesas .titulo{
    margin-bottom: 15px;
}
.despesas div{
  width: 70%;
  margin-bottom: 10px;
  text-align: left;
  border: 1px solid red;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.despesas div button{
    color: #FFF;
    padding: 3px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
}
.despesas ul{
    display: flex;
}
.despesas ul li{
    margin-left: 5px;
}
.btn-editar{
    background-color: green;
}
.btn-cancelar{
    background-color: red;
}
</style>