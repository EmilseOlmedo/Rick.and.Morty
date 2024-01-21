//---------------------MAURI------------
// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//    sequelize.define('User', {
//      email:{
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//          isEmail: true 
//       },
//    },
//    password:{
//    type: DataTypes.STRING,
//    allowNull: false,
//    },

//    }, { timestamps: false });
// };

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { //recibo como parámetro la instancia de sequelize de DB_connection
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false, //no puede queda vacío
         primaryKey: true,
         autoIncrement: true
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
         // validate: {
         //    isEmail: true, // no es necesario ponerlo dentro de validate
         // }
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, 
   { timestamps: false });
};


//Si quiero llamar en singular tanto modelo como tabla puedo añadir la propiedad:
//freezeTableName:true