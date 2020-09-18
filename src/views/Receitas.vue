<template>
    <div class="receitas">

        <p class="titulo">Aqui estão suas receitas cadastradas!</p>

        <div>
            <p>Salário: <span>R$2.000</span></p>
            
            <ul>
                <li><button class="btn-editar">Editar</button></li>
                <li><button class="btn-cancelar">Cancelar</button></li>
            </ul>
        </div>

    </div>
</template>

<style>
.receitas{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
}
.receitas .titulo{
    margin-bottom: 15px;
}
.receitas div{
  width: 70%;
  margin-bottom: 10px;
  text-align: left;
  border: 1px solid green;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.receitas div button{
    color: #FFF;
    padding: 3px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
}
.receitas ul{
    display: flex;
}
.receitas ul li{
    margin-left: 5px;
}
.btn-editar{
    background-color: green;
}
.btn-cancelar{
    background-color: red;
}
</style>