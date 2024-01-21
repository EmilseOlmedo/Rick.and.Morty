import SearchBar from '../searchBar/SearchBar.jsx';
import {Link} from 'react-router-dom';
import style from './Nav.module.css';

 //Nav será el PADRE de la nueva SEARCHBAR
 function Nav({ onSearch, logout }) {

    return (
       <div>
         <Link to='/about'> <button>About</button> </Link>
         <Link to='/home'> <button>Home</button> </Link>
         <Link to='/favorites'> <button>Favorites</button> </Link><button onClick={logout}>Logout</button>
         <SearchBar onSearch={onSearch} />
         
       </div>
    );
 }

 export default Nav;