import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],      //SERÍAN TODOS LOS FAVORITOS
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        //----REEMPLAZO addFav por código Readme---------
        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites: [...state.allCharacters, action.payload],      //hacemos dos copias para poder modificar una y la otra queda como backup
        //         allCharacters: [...state.allCharacters, action.payload]
        //     }
        case ADD_FAV:
            return { ...state,
                 myFavorites: action.payload, 
                 allFavorites: action.payload 
            };

        //----REEMPLAZO addFav por código Readme---------
        // case REMOVE_FAV:
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter((character)=>{
        //             return character.id != action.payload
        //         })
        //     }

        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload,
                allFavorites: action.payload };

        case FILTER:
            const filterByGender = [...state.allCharacters].filter((favorite) => {
                return favorite.gender === action.payload
            })
            return {
                ...state,
                myFavorites: filterByGender
            }

        case ORDER:
            const favoritesOrdered = action.payload==='A'
            ? [...state.myFavorites].sort((a,b)=> a.id - b.id)
            : [...state.myFavorites].sort((a,b)=> b.id - a.id);
            return {
                ...state,
                myFavorites: favoritesOrdered
            }
        

        default:
            return {
                ...state
            }
    }
};

export default reducer;

//Con switch siempre retornaremos un objeto, porque el estado es un objeto
// hacemos la copia del estado para que no se pise la información que puedan tener otras propiedades
//con filter (que recibe una cb) recorro cada personajes y pido que me retorne todos los id sean distintos a action.payload (tiene el id que quiero sacar)
//!= para parsear o hago !=== Number(action.payload)