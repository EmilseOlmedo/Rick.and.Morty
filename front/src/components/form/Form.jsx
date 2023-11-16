import {useState, useEffect} from 'react';
import validation from './validation';

const Form = ({login}) =>{
    const [userData, setUserData] = useState({
        email:'',
        password:''
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    useEffect(()=>{
        if(userData.email !== '' || userData.password !== ''){
        setErrors(validation(userData))}}, [userData]
    );


    return (
        <form onSubmit = {handleSubmit}>
            <label>Email </label>
            <input
                type = 'email' 
                name = 'email' 
                value={userData.email} 
                onChange={handleChange}
            />
            <p>{errors.email}</p>

            <hr style={{borderStyle: 'none'}}/>

            <label>Password </label>
            <input 
                type = 'password' 
                name = 'password'
                value={userData.password} 
                onChange={handleChange}
            />
            <p>{errors.password}</p>

            <hr style={{borderStyle: 'none'}}/>     

            <button type = 'submit'>Submit</button>
        </form>
    )
}

export default Form;

//en vez de hr style puedo colocar directamente <br>, la diferencia es que queda más juntito