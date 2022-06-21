import React from "react";
import styles from "./addTask.module.css";
import {useState} from "react";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [task,setTask] = useState("")

  const addTask = (task) => {
    const newTask = [...task]
    setTask([...task,newTask])
    console.log(newTask)
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    addTask({task})
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" value={task} onChange={(e)=>{
        setTask(e.target.value)
      }} />
      <button data-testid="add-task-button" onClick={onSubmit}>+</button>
    </div>
  );
};

export default AddTask;
