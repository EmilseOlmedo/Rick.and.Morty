import { ADD_FAV, REMOVE_FAV } from "./action-types"



export const addFav = (character)=>{
    return {type: ADD_FAV, payload: character}
}

export const removeFav = (id) => {
    return {REMOVE_FAV, payload: id}
}