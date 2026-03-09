import { createRouter, createWebHistory } from "vue-router"

import Login from "../pages/login.vue"
import Dashboard from "../pages/dashboard.vue"
import Demandas from "../pages/demandas.vue"

const routes = [

{
path: "/",
component: Login
},

{
path: "/dashboard",
component: Dashboard
},

{
path: "/demandas",
component: Demandas
}

]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router