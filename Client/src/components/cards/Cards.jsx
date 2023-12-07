import Card from '../card/Card';

export default function Cards({ characters, onClose }){
   return (
      <div>
         {characters.map((character) => {
            return (
               <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               image={character.image}
               origin={character.origin.name}
               onClose={onClose}
               />
            );
         })}
      </div>
   )
}

//3) export default function Cards(props.characters}){ o con destructuring como arriba
//   recibo la propiedad characters mediante las props. Esta propiedad es una arreglo con todos los personajes.
 
//6) Por cada uno de ellos renderizo un componente Card pasándole todas las propiedades 
//   Utilizo .map para tomar cada personaje (recibe función de callback character) y por cada uno de ellos le pido que me renderice un 
//   componente card con toda la info de cada personaje

//8) a Card le voy pasando cada 

//16) copio la función onClose 

//9) la KEY ayuda a React para encontrar el presonaje de manera más rápida. Puede ser key={character.name} ES UNA BUENA PRÁCTICA
