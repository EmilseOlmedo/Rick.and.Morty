import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId]=useState ('');

   const handleChange = (event)=>{
      setId(event.target.value);
  }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={() => {onSearch(id),setId('')}}>Agregar</button>
      </div>
   );
}

//1) en vez de props ponemos onSearch (destructuring)
//5- {()=>....} hago una función flecha para que me ejecute onSearch, si no se ejecuta automáticamente sin completar mi searchBar