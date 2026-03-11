<template>

<div>

<Navbar/>

<div class="container">

<h1>Dashboard</h1>

<div class="cards">

<StatCard titulo="Demandas Abertas" :valor="10"/>

<StatCard titulo="Em Andamento" :valor="5"/>

<StatCard titulo="Concluídas" :valor="20"/>

</div>

</div>

</div>

</template>

<script>

import Navbar from "../components/Navbar.vue"
import StatCard from "../components/StatCard.vue"

export default{

components:{
Navbar,
StatCard
}

}

</script>

<style>

.container{
padding:30px;
}

.cards{
display:flex;
gap:20px;
margin-top:20px;
}

</style>