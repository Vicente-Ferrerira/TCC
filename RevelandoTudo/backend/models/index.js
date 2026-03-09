const sequelize = require("../config/database")

const User = require("./userModel")
const Demanda = require("./demandaModel")
const Categoria = require("./categoriaModel")
const AtualizacaoDemanda = require("./atualizacaoDemandaModel")
Categoria.hasMany(Demanda)
Demanda.belongsTo(Categoria)

User.hasMany(Demanda)
Demanda.belongsTo(User)

Demanda.hasMany(AtualizacaoDemanda)
AtualizacaoDemanda.belongsTo(Demanda)

module.exports = {
 sequelize,
 User,
 Demanda,
 Categoria,
 AtualizacaoDemanda
}