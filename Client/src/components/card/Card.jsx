/*style*/
import style from './Card.module.css';

import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/action';
import { useLocation } from 'react-router-dom';    //USeLocation me permite saber en que ruta está el usuario


 const Card = ({ id, onClose, name, status,species, gender, origin, image}) => {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites );
   const { pathname } = useLocation(); //retorna un objeto con varias propiedades, la que nos interesa es la prop pathname (para quitar el botón de eliminar en Favoritos) que nos retorna un string
   const [isFav, setIsFav] = useState (false);

const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav (true);
         dispatch(addFav({id, onClose, name, status,species, gender, origin, image}));
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.container}>
         {
            isFav ? (
               <button className={style.favButton} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.favButton2} onClick={handleFavorite}>🤍</button>
            )
         }
            {pathname !== '/favorites'? <button className={style.closeButton} onClick={()=>onClose(id)}>X</button> : ''}  
       
             <Link className={style.text} to={`/detail/${id}`} >
                <h2 className={style.text}>{name}</h2>
            </Link>       
         <div>            
            <img src={image} alt={name} />           
         </div>
          
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

// haciendo destructuring: 8) const {myFavorites} = useSelector((state)=>state)
//42 si estoy en favorites quito el botón eliminar