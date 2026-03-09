require("dotenv").config()

const express = require("express")
const cors = require("cors")

const { sequelize } = require("./models")

const demandasRoutes = require("./routes/demandasRoutes")
const authRoutes = require("./routes/authRoutes")
const app = express()

app.use(cors())
app.use(express.json())



app.use("/auth", authRoutes)
app.use("/demandas", demandasRoutes)

sequelize.sync().then(()=>{
 console.log("Banco sincronizado")
})

app.listen(process.env.PORT, ()=>{
 console.log("Servidor rodando na porta " + process.env.PORT)
})