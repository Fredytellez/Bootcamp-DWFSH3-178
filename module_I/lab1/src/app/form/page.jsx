"use client"

import { useHook } from "lab1/hooks/hooks"
import { useState, useEffect  } from "react";


export default function Form() {
    const { value: valueName, bind: bindName, reset: resetName, setValue: setName } = useHook('');
    const { value: valueEmail, bind: bindEmail, reset: resetEmail, setValue: setEmail } = useHook('');
    const { value: valueUserName, bind: bindUserName, reset: resetUserName, setValue: setUserName } = useHook('');
    const { value: valuePassword, bind: bindPassword, reset: resetPassword, setValue: setPassword } = useHook('');

    const [savedData, setSavedData] = useState({})

    // muestra los datos guardados en el localStorage
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData')) || {};
        setSavedData(storedData);

        if (storedData.name) setName(storedData.name);
        if (storedData.email) setEmail(storedData.email);
        if (storedData.userName) setUserName(storedData.userName);
        if (storedData.password) setPassword(storedData.password);
    }, [setName, setEmail, setUserName, setPassword]);

    // Crea un objeto con los valores de los inputs
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: valueName,
            email: valueEmail,
            userName: valueUserName,
            password: valuePassword,
        }

        // Guarda los datos del objeto en el localStorage como un string
        localStorage.setItem("formdata", JSON.stringify(data));

        setSavedData(data);
    
        // resetea los valores de los input
        resetName();
        resetEmail();
        resetUserName();
        resetPassword();
        console.log(data)
    }


    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Nombres y apellidos</label>
            <input type="text" name="name" {...bindName}/>
            <br />
            <label>Email</label>
            <input type="email" name="email" {...bindEmail}/>
            <br />
            <label>Username</label>
            <input type="texto" name="username" {...bindUserName} />
            <br />
            <label>Password</label>
            <input type="password" name="password" {...bindPassword}/>
            <br />
            <input type="submit" value="enviar"/>
        </form>
        <div>
            <h2>Datos guardados en localStorage</h2>
            <p>Nombre: {savedData.name}</p>
            <p>Email: {savedData.email}</p>
            <p>Username: {savedData.userName}</p>
            <p>Password: {savedData.password}</p>
        </div>
        </div>
    )
}