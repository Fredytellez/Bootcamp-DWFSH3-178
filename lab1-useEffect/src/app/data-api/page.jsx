"use client";

import { useState, useEffect } from "react";

export default function dataApi() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .then((error) => console.log(error));
  },[]);

  return (
    <div>
      <h2>Informacion de la Api</h2>
      <ul>
        {users.map((item) => <li key={item.id}> <strong>Id:</strong> {item.id} <strong>Name:</strong> {item.name} <strong>email:</strong> {item.email}<br /> </li>  )
        }
      </ul>
    </div>
  );
}
