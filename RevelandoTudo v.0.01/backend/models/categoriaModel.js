const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Categoria = sequelize.define("categoria", {

 nome: {
  type: DataTypes.STRING,
  allowNull: false
 }

})

module.exports = Categoria