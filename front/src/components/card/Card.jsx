import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFav, removeFav } from '../../redux/action';

 const Card = ({ id, onClose, name, status,species, gender, origin, image}) => {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState (false);

const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setISFav (true);
         dispatch(addFav({id, onClose, name, status,species, gender, origin, image}));
      }
   }


   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
        <button onClick={()=>onClose(id)}>X</button> 
             <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link> 
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}

export default Card;

// export default function Card(props) {
//     //    // console.log(props);
//        return (
//            <div>
//             <button onClick={()=>props.onClose(props.id)}>X</button> 
//             <Link to={'/detail/${id}'}>
//                 <h2>{props.name}</h2>
//             </Link>
//             <h2>{props.status}</h2>
//             <h2>{props.species}</h2>
//             <h2>{props.gender}</h2>
//             <h2>{props.origin}</h2>
//             <img src={props.image} alt={props.name} />  
//            </div>
//        );
//     }
// onClick es el evento o listening. cuando se le da click a ese botón se ejecuta la función que está entre {}.
// onClick se pasa como atributo de la etiqueta button