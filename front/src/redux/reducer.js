import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character)=>{
                    return character.id !== action.payload
                })
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