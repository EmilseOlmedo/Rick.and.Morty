const {Favorite} = require ('../DB_connection');

const postFav = async (req, res) => {
    try {
        const {id, name, gender, species, origin, image, status} = req.body;
        //validation:
        if (!id || !name || !gender || !species || !origin || !image || !status)
        return res.status(400).json({message: 'Faltan datos'});

        //si toda la info está, guardamos el personaje en la tabla:
        await Favorite.findOrCreate ({
            where: {id, name, gender, species, origin, image, status}
        });

        //nos traemos todos los personajes de favoritos, incluido el agregado recientemente
        const allFavs = await Favorite.findAll();
        return res.json (allFavs);

} catch (error) {
    return res.status(500).json({error: error.message})
};
}

module.exports = postFav