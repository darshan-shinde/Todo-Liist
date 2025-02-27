import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>TODO LIST</h1>
      <p>
        You have <b data-testid="header-remaining-task">{unCompletedTask}</b> of{" "}
        <b data-testid="header-total-task">{totalTask}</b> tasks remaining{" "}
      </p>
    </div>
  );
};

export default TaskHeader;
