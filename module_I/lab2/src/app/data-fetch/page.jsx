"use client";

import { useEffect, useState } from "react";
import styles from './page.module.css';

export default function DataFetch() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <h2>Informacion de la Api</h2>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam,
        commodi esse a saepe odio vel repudiandae aspernatur suscipit, repellat
        possimus voluptatem ut eaque, dignissimos cumque laboriosam! Odio, enim
        quos.
      </p>
      <ul>
        {users.map((item) => (
            <li key={item.id} className={styles.list}>
            <strong>User ID:</strong> {item.userId} <br />
            <strong>Title:</strong> {item.title} <br />
            <strong>Body:</strong> {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
