const {Favorite} = require ('../DB_connection');

const deleteFav = async (req, res) =>{
    try {
        // const id = Number (req.params.id);
        const {id} = req.params

        const delFav = await Favorite.findByPk(id);
        await delFav.destroy();
        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs)
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

module.exports = deleteFav