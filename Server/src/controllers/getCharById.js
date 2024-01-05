const axios = require ('axios');
const APIKEY = 'pi-emilseolmedo';
const URL= 'https://rym2.up.railway.app/api/character/';

const getCharById = (req, res)=>{
    // const id = req.params.id---->o con D
    const {id} = req.params;

    axios(`${URL}${id}?key=${APIKEY}`)
    .then(({data})=>{
        if(data.id){ //si encuentro un personaje retorno lo que quiero de data
            const character = {
                id,
                name: data.name,
                status: data.status,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                species: data.species
            };
            return res.status(200).json(character);
        }
        return res.status(404).send('Noy found') //si todo sale bien pero no se encuentra al personaje
    })
    .catch((error)=>{
        return res.status(500).send(error.message); //send cuando ampliamos texto plano, sino json
    })

};

module.exports = {
    getCharById
};



//---------------ELIMINANDO PARA APLICAR EXPRESS-------------------------------
// const axios = require ('axios');
// const APIKEY = 'pi-emilseolmedo'

// const getCharById = (res, id)=>{
//     axios.get(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
//     .then ((res) => res.data)
//     .then ((data)=> {
//         const character = {
//             id, 
//             name:data.name, 
//             gender:data.gender, 
//             species:data.species, 
//             origin:data.origin, 
//             image:data.image, 
//             status:data.status
//         }
//         return res
//             .writeHead(200, {'Content-type': 'apliccation/json'})
//             .end(JSON.stringify(character))
//     })
//     .catch((error)=> {  //error es un objeto, dentro tiene un message de error
//         // throw Error(error.message)
//         return res
//             .writeHead(500,{'Content-type': 'text/plain'})
//             .end(error.message);
//     })
// } 

// module.exports = getCharById;
//------------------------------------------------------------------------------------

/*destructuring .then:
.then (({name, gender, species, origin, image, status})=> {
        const character = {
            id, 
            name, 
            gender, 
            species, 
            origin, 
            image, 
            status
        }*/