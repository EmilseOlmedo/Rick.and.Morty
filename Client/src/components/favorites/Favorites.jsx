import { useSelector, useDispatch } from "react-redux";
import Cards from '../cards/Cards'
import { filterCards, orderCards } from "../../redux/action";
import { useState } from 'react';

const Favorites = ()=> {
    const {myFavorites} = useSelector ((state) => state);
    const dispatch = useDispatch();
    // const [aux, setAux] = useState (false);
    
    const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      // setAux(!aux);
    }

    const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
    }

    /* PUEDO UNIR LOS HANDLE
    const handleChange = (event) => {
      if(event.target.name === 'filter' {
        dispatch (filterCards(event.target.value));
      }else{
        dispatch(orderCards(event.target.value));
      }
        */

    return (
      <div>        
        <select name='order' onChange={handleOrder}>
          <option value='A'>Ascendente</option>
          <option value='D'>Descendente</option>    
        </select> 
        <select name= 'filter' onChange={handleFilter}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>      
        </select>                
        <Cards characters={myFavorites}/>      
      </div>
    )
}

export default Favorites;

/*{props.onClose ? (
          <button
            className={style.borrarBtn}
            onClick={() => {
              if (isFav) props.removeFav(props.id);
              props.onClose(props.id);
            }}
          >
            ❌
          </button>
        ) : null}*/
