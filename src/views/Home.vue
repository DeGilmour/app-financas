<template>
  <div class="home">

    <p>Fique atento para não ficar no vermelho!</p>

    <table>
      <tr>
        <td>Receitas: </td>
        <td class="valor-positivo">R$2.000</td>
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

    <div class="btn-links">
      <nav>
        <ul>
          <li><a href="#">Nova despesa</a></li>
          <li><a href="#">Nova receita</a></li>
        </ul>
      </nav>
    </div>

    <div class="form">
      <form>
        <input type="text" placeholder="Digite aqui o valor">
        <input type="text" placeholder="Digite aqui a razão">
        <label for="data">Até quando?</label>
        <input type="date">

        <button>Cadastrar</button>
      </form>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
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
