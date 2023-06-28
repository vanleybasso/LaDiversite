const {Sequelize, DataTypes} = require('sequelize');
const conexaobebida = new Sequelize(
  'bebidas',
  'root',
  'inter14',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }

);

conexaobebida. authenticate().then(() =>{
  console.log("DEU BOM");
}).catch((error) => {
  console.log("DEU RUIM");
});

const Bebida = conexaobebida.define (
  "Bebida",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
},
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
 

}
  
);

Bebida.sync();

module.exports = Bebida;