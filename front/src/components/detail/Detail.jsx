import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

const Detail = () => {
    const {id} = useParams(); //--->destructuring
    const [character, setCharacter] = useState({}); //para el CHEKCPOINT

    const APIKEY = 'pi-emilseolmedo';

    useEffect(() => {
        axios.get(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                alert('No hay personajes con ese ID');
              }
           }
        );
        
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <h2>{character?.name}</h2>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character.name} />
        </div>
    )
}

export default Detail;