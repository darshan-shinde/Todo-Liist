import React from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";

import {AddTask} from "./AddTask";

import {Task} from "./Task";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* Add Task */}
      <AddTask />
      {/* Tasks */}
      <Task />

    </div>
  );
};

export default TaskApp;
