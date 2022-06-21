import React from "react";
import styles from "./task.module.css";
import {useState,useEffect} from "react"
import {Counter} from "../Counter"

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [list,setList] = useState([])

  useEffect(()=>{
    const f = async () =>{
      try {
        let res = await fetch("http://localhost:8080/tasks")
        let data = await res.json()
        console.log(data)
         setList(data)
      } catch (error) {
        console.log(error)
      }
  }
    f()
  },[])
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{list.map((e)=>(
       <h3>{e.text} <Counter /></h3>
      ))}</div>
     
      {/* Counter here */}
      <button data-testid="task-remove-button"></button>
    </li>
  );
};

export default Task;
