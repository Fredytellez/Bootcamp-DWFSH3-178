/* "use client";

import { useHook } from "lab1/hooks/hooks";
import { useEffect } from "react";

export default function DataForm() {
  const { value: valueName, setValue: setName } = useHook();
  const { value: valueEmail, setValue: setEmail } = useHook("");
  const { value: valueUserName, setValue: setUserName } = useHook("");
  const { value: valuePassword, setValue: setPassword } = useHook("");


      useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("formData")) || {};
    
        if (savedData.name) setName(savedData.name);
        if (savedData.email) setEmail(savedData.email);
        if (savedData.userName) setUserName(savedData.userName);
        if (savedData.password) setPassword(savedData.password);
      }, [setName, setEmail, setUserName, setPassword]);


  return (
    <div>
      <h2>Datos guardados</h2>
      <p>Nombre: {valueName}</p>
      <p>Email: {valueEmail}</p>
      <p>Username: {valueUserName}</p>
      <p>Password: {valuePassword}</p>
    </div>
  );
} */
