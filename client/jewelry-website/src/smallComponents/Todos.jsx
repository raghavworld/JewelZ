import React, { useEffect, useState } from "react";
import axios from "axios";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setCount((prev) => {
        if (prev >= 5) {
          clearInterval(time);
          return;
        }
        axios.get("https://randomuser.me/api/").then(async (res) => {
          const result = await res.data?.results;
          setTodos(result);
        });
        return prev + 1;
      });
    }, 3000);

    return () => {
      console.log("Fetching Stopped");
      clearInterval(time); //to clear interval at every useeffect Render
    };
  }, []);

  return (
    <div className="pt-20">
      {todos.map((el) => (
        <li key={el.id}>
          <h1>{count || "fetching stopped"}</h1>
          <p>{el.gender}</p>
          <p>{el.name.first}</p>
          <p>{el.email}</p>
          <p>{el.cell}</p>
        </li>
      ))}
    </div>
  );
};

export default Todos;
