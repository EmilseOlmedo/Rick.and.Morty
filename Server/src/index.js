/*server config*/
const express = require('express'); //requiro express
const server = express(); //ejecuto express
const PORT = 3001;

/*routers*/
const {router} = require('./routes/index');

/*middleware*/
/*le damos permiso al front-end para que pueda hacernos una solicitud. Podemos usa cors*/
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json()); /*cada vez que el front me envía info por body eso llega en formato json
entonces hago uso de este traductor*/

server.use('/rickandmorty', router) //agrego el string rickandorty antes de c/ruta--->dentro de router están todas las rutas

server.listen(PORT, () => { //levanto el puerto 
   console.log('Server raised in port: ' + PORT);
}); 




//----------------ELIMINANDO web server PARA APLICAR EXPRESS--------------
// const http = require("http");
// const getCharById = require ('./controllers/getCharById');

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")) {
//         const id = req.url.split('/').at(-1);
//         getCharById(res, Number(id))//----> si no lo parseo con Number JS lo hace solo. Buena práctica: hacer el parseo
//     }
// }).listen(3001, 'localhost')


//--------------------- HEADER CON * ------------------------
/* res.setHeader('Access-Control-Allow-Origin', '*');  //indica si los recursos de la 
respuesta pueden ser compartidos con el origen dado. * permitiendo a cualquier origen 
acceder al recurso. Es decir, hace que cualquier frontend pueda realizar consultas*/

//------------------- OPCIONES DEL IF-------------------   
// 1)    if(req.url.includes("/rickandmorty/character")){
//         const id = Number(req.url.split('/').pop());
//         getCharById(res,id);
//     }
//
// 2)   if(req.url.includes("/rickandmorty/character")) {
//          const id = req.url.split('/').at(-1);
//          let characterFind = characters.find((char)=>char.id === Number(id))



/*----------------ejercicio de web server:-------------------
if (req.url.includes("/rickandmorty/character")) {
       const id = req.url.split('/').pop();
       const character = data.find(char=>char.id === Number(id));
       res.writeHead(200,{"Content-type":"application/json"});
       res.end(JSON.stringify(character));//serialización a protocolo http y allí lo deserializan            
    }  */