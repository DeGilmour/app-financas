<template>
    <div class="navbar">
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/despesas">Despesas</router-link></li>
                <li><router-link to="/receitas">Receitas</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    methods:{

    }
}
</script>

<style>
.navbar{
    width: 100%;
    padding: 3%;
    background-color: rgb(17, 204, 193);
    box-shadow: 0 2px 4px rgba(17, 204, 193, 0.3);
    margin-bottom: 35px;
    border-radius: 12px 12px 0 0;
}
.navbar nav ul{
    display: flex;
    justify-content: space-around;
}
.navbar nav ul a{
    font-weight: bold;
    font-size: 1.2rem;
    color: #FFF;
    transition: 0.1s;
}
.navbar nav ul a:hover{
    opacity: 0.7;
}
</style>