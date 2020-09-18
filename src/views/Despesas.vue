<template>
    <div class="despesas">

        <p class="titulo">Aqui estão suas despesas cadastradas!</p>

        <div>
            <p>Conta de luz: <span>R$1.000</span></p>
            
            <ul>
                <li><button class="btn-editar">Editar</button></li>
                <li><button class="btn-cancelar">Cancelar</button></li>
            </ul>
        </div>

        <div>
            <p>Conta de internet: <span>R$500</span></p>
            
            <ul>
                <li><button class="btn-editar">Editar</button></li>
                <li><button class="btn-cancelar">Cancelar</button></li>
            </ul>
        </div>

    </div>
</template>

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