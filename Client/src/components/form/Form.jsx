import {useState, useEffect} from 'react';
import validation from './validation';
import style from './Form.module.css'

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
        <form onSubmit = {handleSubmit} className={style.container}>
            <label>EMAIL </label>
            <input className={style.input}
                type = 'email' 
                name = 'email' 
                value={userData.email} 
                onChange={handleChange}
            />
            <p>{errors.email}</p>

            
            <label>PASSWORD </label>
            <input className={style.input}
                type = 'password' 
                name = 'password'
                value={userData.password} 
                onChange={handleChange}
            />
            <p className={style.error}>{errors.password}</p>

             
            <button type = 'submit' className = {style.submit}>SUBMIT</button>
        </form>
    )
}

export default Form;

//en vez de hr style puedo colocar directamente <br>, la diferencia es que queda más juntito