const { User } = require('../DB_connection'); //User lo importamos desde donde estaban creados con sequeliza, no de models

const postUser = async(req, res) => {
    try {
        const {email, password} = req.body

        if (!email || !password) 
        return res.status(400).json({message: 'Faltan datos'})

        const user = await User.findOrCreate({ 
            where: {email, password},
        })
            return res.status(201).json(user); //mandamos un json con la info
    }
    catch (error){
        return res.status(500).json({ error: error.message});
    }
}

module.exports = postUser;   

//------------------CR-------------------
// const postUser = async(req, res) => {
//     try {
//         const {email, password} = req.body

//         if (!email || !password) 
//         return res.status(400).json({message: 'Faltan datos'})

//         const [ createdUser, created ] = await User.findOrCreate({ //createdUser: hace ref a el usuario que nos estamos trayendo y created: prop que permite establecer si creamos registro o no (si se encontró o se creó)
//             where: {email},
//             defaults: {     //si no encuentra ese email crea el registro pasandole el otro parámetro con el usurio y contraseña
//                 password
//             }
//         });
        
//         if (created) {      //en este caso se puede omitor este if, no es ncesario  usar created
//             return res.status(201).json(createdUser);
//         } else {
//             return res.status(200).json(createdUser);
//         }
//     }catch (error){
//         return res.status(500).json({ error: error.message});
//     }
// };

// module.exports = postUser;






