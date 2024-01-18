import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"
import axios from 'axios';

//----REEMPLAZO addFav por código Readme---------
// export const addFav = (character)=>{
//     return {type: ADD_FAV, payload: character}
// }

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try{
            const {data} = await axios.post(endpoint, character)
            
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        }catch (error) {
            throw Error (error.message);
        }      
       };
    };


 //----REEMPLAZO addFav por código Readme---------
// export const removeFav = (id) => {
//     return {type: REMOVE_FAV, payload: id}
// }

export const removeFav = (id) => {
    return async (dispatch) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        const {data} = await axios.delete(endpoint)
        return dispatch({
            type: REMOVE_FAV,
            payload: data,
        });
        } catch  (error) {
            throw Error (error.message);
        }  
    };
 };
 //*********************************************************** */
 
//  export const removeFav = (id) => {
//      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//      return async (dispatch) => {
//          try {
//              const { data } = await axios.delete(endpoint)
//              return dispatch({
//                  type: REMOVE_FAV,
//                  payload: data,
//              });
//          } catch (error) {
//              window.alert("Error removing the character from favorites")
//          }
//      };
//  };

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (order) => {
    return {type: ORDER, payload: order}
}

//****************************** */
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//      return async (dispatch) => {
//          try {
//              const { data } = await axios.post(endpoint, character)
//              return dispatch({
//                  type: ADD_FAV,
//                  payload: data,
//              });
//          } catch (error) {
//              window.alert("Error adding the character to favorites")
//          }
//      };
//  };
 //*********************************************************** */
 
//  export const removeFav = (id) => {
//      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//      return async (dispatch) => {
//          try {
//              const { data } = await axios.delete(endpoint)
//              return dispatch({
//                  type: REMOVE_FAV,
//                  payload: data,
//              });
//          } catch (error) {
//              window.alert("Error removing the character from favorites")
//          }
//      };
//  };
