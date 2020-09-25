<template>
    <div class="despesas">

        <p class="titulo">Aqui estão suas despesas cadastradas!</p>
            <p>Search </p><input type="text" v-on:keyup="Search()" placehold="Pesquise aqui seu objetivo" name="" id="search_input">
        
            <div class="div_content" id="div" v-for="value of values" v-bind:key="value.id">
                <span class="nomes" > {{value.nome}}</span>
                <span> Valor do Objetivo : R${{value.quantidade}}</span>
                <span>Data prevista para o termino : {{value.dt_fim}}</span>
                <span>Meses para o termino : {{value.mes}} e valor mensal : R${{value.valor_mes}}</span>
                <span>Dias para o termino : {{value.dia}} e valor diario : R${{value.valor_dia}}</span>
            
                <ul >
                    
                    <li><button  v-on:click="showInput($event)" class="btn-editar">Editar</button></li>
                    <input id="input_nome" type="hidden" style="opacity: 0.84; height:50px;width: 50px;" v-model="nome" placeholder="Digite aqui o nome do objetivo">
                    <input id="input_quantidade"  type="hidden" style="opacity: 0.84; height:50px;width: 50px;" v-model="quantidade" placeholder="Digite aqui o valor">
                    <input id="input_data" style="opacity: 0.84; height:50px;width: 50px;" type="hidden"  v-model="dt_fim" >
                    <button style="display: none;" id="btn_edit" :value="value.id" v-on:click="getId_up($event)" >Finaliziar Edicao</button>
                
                    <form @submit="getId_del">
                    <li><button :value="value.id" v-on:click="getId_del($event)" class="btn-cancelar">Cancelar</button></li>
                    </form>
                    <div id="append">

                    </div>
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
              values : {},
              id : '',
              nome : '',
              quantidade : '',
              dt_fim : ''
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
            
            getId_del(e) {
                
                let currentObj = this;
                const buttonValue = e.target.value;
                this.axios.post('http://localhost:3000/lista-del', {
                    id: buttonValue

                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            },
            showInput(){
                var edit_nome = document.getElementById("input_nome");
                edit_nome.setAttribute("type", "");
                var edit_q = document.getElementById("input_quantidade");
                edit_q.setAttribute("type", "");
                var edit_data = document.getElementById("input_data");
                edit_data.setAttribute("type", "date");
                var butto_edit_full = document.getElementById("btn_edit");
                butto_edit_full.setAttribute("style", "background-color: #008CBA;");
                var div = document.getElementById("append");
                div.appendChild(edit_nome); 
                div.appendChild(butto_edit_full); 
                div.appendChild(edit_q); 
                div.appendChild(edit_data); 

            },
            getId_up : async function(e)  {
                let currentObj = this;
                const buttonValue = e.target.value;
                var params = {
                    id : buttonValue,
                    nome : this.nome,
                    quantidade : this.quantidade,
                    dt_fim : this.dt_fim
                }
                let res = await axios.post('http://localhost:3000/lista-up', params)
           
                .then(res => {
                    currentObj.output = res.data;
                    console.log(currentObj.output);
                    console.log("here");
                    if (res.data.redirect == '/Home') {
                        alert("here");
                        // window.location.href = 'http://127.0.0.1:8080/despesas',true;
                    } 
              })
                .catch(function (error) {
                    currentObj.output = error;
                });
            },
            Search() {
                var name, lista_span, parent, txtValue, valor, input, filter
                input = document.getElementById('search_input');
                filter = input.value.toUpperCase();
                name = document.getElementsByClassName("nomes");
                lista_span =[]; 
                for (var c=0;c < name.length; c++){
                    valor = name[c].textContent || a.innerText;
                    console.log(valor);
                    parent = name[c].parentElement;
                    console.log(parent);
                    if (valor.toUpperCase().indexOf(filter) > -1) {
                    parent.style.display = "";
                    } else {
                    parent.style.display = "none";
                    }
                }
               
                
            },
            
        

            
            // getId_up(e) {
            //     let currentObj = this;
            //     const buttonValue = e.target.value;
            //     this.axios.post('http://localhost:3000/lista-up', {
            //         id : buttonValue,
            //         nome : this.nome,
            //         quantidade : this.quantidade,
            //         dt_fim : this.dt_fim


            //     })
            //     .then(res => {
            //         currentObj.output = res.data;
            //         console.log("here");
            //         if (res.data.redirect == '/Home') {
            //             alert("here");
            //             // window.location.href = 'http://127.0.0.1:8080/despesas',true;
            //         } 
            //   })
            //     .catch(function (error) {
            //         currentObj.output = error;
            //     });
            // },
        
        
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
.div_content{
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