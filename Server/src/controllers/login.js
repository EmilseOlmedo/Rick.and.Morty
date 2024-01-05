const users = require ('../utils/users')

const login = (req, res)=>{
    const {email, password} = req.query //debería venir la info del query (en la realidad las contraseñas deberían venir por body por ser dato sensible)
    const userFound = users.find((user)=> user.email === email && user.password === password);

    if (userFound) return res.status(200).json({'access':true}) //la prop del objeto está con " " porque está en json

    return res.status(404).json({'access':false});
};

module.exports = {
    login
};

//-------------------------------------------------------------------
// const users = require ('../utils/users')


// const login = function(req,res){

//     const { email, password } = req.query ;
    
//     const userValid = users.find((user) => (user.email === email && user.password === password))

//         if(userValid){    
//         return res.status(200).json({access: true})
//         }else{
//         return res.status(403).json({
//         access: false,
//         message: 'Usuario o contraseña inválidos. Try again'
//         })
//     }
// }

//     module.exports = login ;

//--------------------------------------------------------------------------------
// const users = require ('../utils/users')

// const login = (req, res)=>{
//     const {email, password} = req.query;

//     const userValid = users.find(
//         (user)=>user.email === email && user.password === password);
        
//     if (userValid){
//         return res.json({access: true});
//     } else {    
//     return res.json({access: false});
//     }
//     //con ternario:
//     /* return userValid
//         ?res.json({access: true});
//         :res.json({access: false})*/
// }

// module.exports = login;