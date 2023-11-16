import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form'

const APIKEY = 'pi-emilseolmedo';
const USER_EMAIL = 'hola@gmail.com'
const USER_PASSWORD = 'asd123'

function App() {
   const [characters, setCharacters]=useState ([]);
   const {pathname} = useLocation();
   const [access, setAccess]= useState(false);
   const navigate = useNavigate(); //fn{...}


  
   function onSearch(id) {
      if (characters.some((character) => character.id === Number(id))) {
         window.alert("El personaje ya ha sido agregado");
       } else {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
};

   function onClose (id) {
      setCharacters(characters.filter((character) => character.id !== Number(id)))
   }

   const login = (userData) =>{
      if (userData.password === USER_PASSWORD && userData.email === USER_EMAIL){
         setAccess(true);
         navigate ('/home'); //le digo a donde quiero que lo lleve
      } else {
         window.alert('Email o password incorrecto');
      }
   };

   function logout() {
    setAccess(false);
    navigate('/');
  }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}         
         <Routes>
            <Route path= "/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path= "/about" element={<About/>}/>
            <Route path= "/detail/:id" element={<Detail/>}/> 
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
      </div>
   );
}

export default App;
//7- useState: nos dará un arreglo con [estado local, función para modificar el estado]
//11- ...character: mantiene lo que tengo en mi [] y lo coloco dentro de [] para mantener el tipo de dato
//14 Cards recibe por props (Cards characters) el arreglo {characters} que son los presonajes default de data.js
// <SearchBar onSearch={(characterID) => window.alert(characterID)} /> 
//               ^            ^                             ^
//             props       función                   no da un alert
//                que toma el id del personaje      de ese personaje

// App es el PADRE que estará pasando a su HIJO Nav la función onSearch

// Cosas eliminadas del ejercicio
       /* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */
//import characters, { Rick } from './data.js';