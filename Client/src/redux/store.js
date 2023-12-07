import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;

//composeEnhancer: permite conectar mi proyecto con la extensión (nombre por convención)
//thunkMiddleware: es un traductor. me permite comunicar con el servidor
//redux-thunk: nos permite poder hacer un llamado a una APi con un action
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
// ^es sólo para que windows nos muestre la info que estamos trabajando con redux
//MIDDLEWARE: traductor. Está en el medio entre el front y el back
