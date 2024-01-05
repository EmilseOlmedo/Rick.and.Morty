let myFavorites = []; //será nuestra base de datos

const postFav = (req, res)=>{
    const character = req.body;
    const characterRepeated = myFavorites.find((favorite)=>{ //verifico que no esté repetido mi personaje
        return favorite.id == character.id //le pido que me retorne el favorite cuyo id coincide con el que me mandan por body
    });
    if (!characterRepeated)myFavorites.push(character); //agrego al array el personaje que recibo

    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res)=>{
    const {id} = req.params;

    myFavorites = myFavorites.filter((favorite)=>{ //piso el array con uno nuevo que va a tenr todos lospersonajes menos el eliminado
        return favorite.id != id //que se quede con todos los personajes cuyo id sea != al id que me llega por params
    }); 
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav, deleteFav
};

//-----------------------------------------------------------------------------------
// let myFavorites = []; 

// const postFav = (req, res)=>{
//     myFavorites.push(req.body);
//     return res.status(201).json(myFavorites) //--->201 porque acabamos de crear algo con ese push
// };

// const deleteFav = (req, res)=>{
//    const {id} =  req.params;

//    myFavorites = myFavorites.filter((favorite)=>favorite.id !== Number(id));
//    return res.json(myFavorites)
// };

// module.exports = {
//     postFav,
//     deleteFav,
// };