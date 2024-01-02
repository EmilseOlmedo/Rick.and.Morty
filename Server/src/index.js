const http = require("http");
const getCharById = require ('./controllers/getCharById');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")) {
        const id = req.url.split('/').at(-1);
        getCharById(res, Number(id))//----> si no lo parseo con Number JS lo hace solo. Buena práctica: hacer el parseo
    }
}).listen(3001, 'localhost')


// http.createServer((req, res)=>{ 
//     res.setHeader('Access-Control-Allow-Origin', '*');  //indica si los recursos de la respuesta pueden ser compartidos con el origen dado. * permitiendo a cualquier origen acceder al recurso
    
//     if(req.url.includes("/rickandmorty/character")){
//         const id = Number(req.url.split('/').pop());
//         getCharById(res,id);
//     }
// }).listen(3001, 'localhost');


/*ejercicio de web server:
if (req.url.includes("/rickandmorty/character")) {
       const id = req.url.split('/').pop();
       const character = data.find(char=>char.id === Number(id));
       res.writeHead(200,{"Content-type":"application/json"});
       res.end(JSON.stringify(character));//serialización a protocolo http y allí lo deserializan            
    }  */

    /*http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")) {
        const id = req.url.split('/').at(-1);
        let characterFind = characters.find((char)=>char.id === Number(id))

        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify(characterFind))
    }
}).listen(3001, 'localhost')*/

//res.setHeader('Access-Control-Allow-Origin', '*')---->hace que cualquier frontend pueda realizar consultas