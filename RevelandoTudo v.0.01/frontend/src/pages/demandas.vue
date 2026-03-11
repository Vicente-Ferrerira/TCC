<template>

<div>

<Navbar/>

<div class="container">

<h1>Lista de Demandas</h1>

<ul>

<li v-for="demanda in demandas" :key="demanda.id">

{{ demanda.titulo }} - {{ demanda.status }}

</li>

</ul>

</div>

</div>

</template>

<script>

import Navbar from "../components/Navbar.vue"
import api from "../services/api"

export default{

components:{
Navbar
},

data(){

return{

demandas:[]

}

},

async mounted(){

const response = await api.get("/demandas")

this.demandas = response.data

}

}

</script>

<style>

.container{
padding:30px;
}

</style>