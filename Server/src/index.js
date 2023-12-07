const http = require("http");
const data = require('./utils/data')


const PORT = 3001

http.createServer((req, res)=>{ 
    res.setHeader('Access-Control-Allow-Origin', '*');  //indica si los recursos de la respuesta pueden ser compartidos con el origen dado. * permitiendo a cualquier origen acceder al recurso
    
    if (req.url.includes("/rickandmorty/character")) {
       const id = req.url.split('/').pop();
       const character = data.find(char=>char.id === Number(id));
       res.writeHead(200,{"Content-type":"application/json"});
       res.end(JSON.stringify(character));//serialización a protocolo http y allí lo deserializan            
    }  
}).listen(3001, 'localhost')
