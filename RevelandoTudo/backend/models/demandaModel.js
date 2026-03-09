const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Demanda = sequelize.define("Demanda", {

 titulo: {
  type: DataTypes.STRING,
  allowNull: false
 },

 descricao: {
  type: DataTypes.TEXT,
  allowNull: false
 },

 status: {
  type: DataTypes.STRING,
  allowNull: false,
  defaultValue: "Em análise"
 },

 dataEsperada: {
  type: DataTypes.DATE
 }

})

module.exports = Demanda