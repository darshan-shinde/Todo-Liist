import React from "react";
import styles from "./counter.module.css";
import { useState,useEffect } from "react";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  const [count,setCount] = useState([])

  useEffect(()=>{
    const f = async () =>{
      try {
        let res = await fetch("http://localhost:8080/tasks")
        let data = await res.json()
        console.log(data)
         setCount(data)
      } catch (error) {
        console.log(error)
      }
  }
    f()
  },[])
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button">+</button><span data-testid="task-counter-value">{count.map((e)=>(
       <h3>{e.count}</h3>
      ))}</span> <button data-testid="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
