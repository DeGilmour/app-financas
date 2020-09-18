<template>
  <div class="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar
  },
  created() {
    this.print();
  },
  methods: {
    print(){
      console.log("Live")
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  list-style: none;
  font-family: 'Dosis', sans-serif;
}

body{
  widows: 100%;
  height: 100vh;
  background-image: url(./assets/bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.valor-negativo{
  color: red;
}

.valor-positivo{
  color: green;
}

.valor-no-azul{
  color: blue;
}

.app{
  width: 50%;
  max-width: 1440px;
  height: 70vh;
  background-color: #FFF;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media screen and (max-width: 520px) {
  .app{
    width: 95%;
    height: 80vh;
  }
}

@media screen and (min-width: 521px) and (max-width: 1024px) {
  .app{
    width: 80%;
    height: 75vh;
  }
}

</style>
