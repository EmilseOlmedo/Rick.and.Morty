const {getCharById} = require ('../controllers/getCharById');
const login = require ('../controllers/login');
// const {postFav, deleteFav} = require ('../controllers/handleFavorites')----->eliminado al crear los otros controllers
const deleteFav = require ('../controllers/deleteFav');
const postFav = require ('../controllers/postFav');
const postUser = require ('../controllers/postUser');


/*EXPRESS CONFIG*/
const express = require('express');
const router = express.Router();
// OTRA OPCIÓN ES:
// const {Router} = require('express'); //Router: me permite modularizar rutas
// const router = Router();


//CREO MIS RUTAS
router.get('/character/:id', getCharById); //en vez de crear una cb directamente llamo al controller
router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = {
    router
}