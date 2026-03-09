<template>

<div class="navbar">

<h2>Sistema de Demandas</h2>

<div class="links">

<router-link to="/dashboard">Dashboard</router-link>

<router-link to="/demandas">Demandas</router-link>

</div>

</div>

</template>

<script>

export default {
name: "Navbar"
}

</script>

<style>

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
background:#2c3e50;
color:white;
}

.links a{
margin-left:20px;
color:white;
text-decoration:none;
}

</style>