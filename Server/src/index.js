const fs = require("fs");
const http = require("http");
const data = require ('./utils/data')


const PORT = 3001

http.createServer((req, res)=>{ 
    res.setHeader('Access-Control-Allow-Origin', '*');  //a quien le doy acceso para que pueda hacer request yta desde mi servidor, por defecto * (todo el mundo)
    if (request.url.includes("/rickandmorty/character")) {
       const id = req.url.split('/').at(-1);
       //id = Number(url.split('/').pop())--->opción Mauri
       const  characterFound = data.find((character)=>character.id === Number(id))
       if (characterFound){
        res.writeHead(200,{"Content-type":"application./json"})
        return res.end(JSON.stringify(characterFound))//serialización a protocolo http y allí lo desentrslizan            
    }
    res.writeHead(404,{"Content-Type":"text/plain"})
    return res.end("Character not found")  
}}).listen(PORT, 'localhost', ()=>{
    Console.log(`server listening in port ${PORT}`)
})