<template>

<div class="login-container">

<h2>Login</h2>

<input v-model="email" placeholder="Email" />
<input v-model="senha" type="password" placeholder="Senha" />

<button @click="login">Entrar</button>

</div>

</template>

<script>

import api from "../services/api"

export default {

data(){
return{
email:"",
senha:""
}
},

methods:{

async login(){

const response = await api.post("/auth/login",{
email:this.email,
senha:this.senha
})

console.log(response.data)

}

}

}

</script>