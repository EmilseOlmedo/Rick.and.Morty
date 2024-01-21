require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require('./models/User');
const FavoriteModel = require ('./models/Favorite');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false } //logging: controla los msj de registro que se van a colocar en la terminal. Está en false para que no nos molesten los cambios en la consola
);                                    //native: sequelize es el que va a utilizar los controladores. Si quiero trabajar con los controladores lo pongo en true

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

UserModel(sequelize);
FavoriteModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;   //---> este USer y Favorite vienen de models.
User.belongsToMany(Favorite, {through: "user_favorite"});
Favorite.belongsToMany(User, {through: "user_favorite"});

module.exports = {
   User,
   Favorite,
   // ...sequelize.models ----> otra forma correcta de traer todos los modelos
   conn: sequelize,
};
