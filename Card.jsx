import React, { useState } from "react";

const Card = ({ day, createTask, toggleTask, Deletetask, remove }) => {
  const [task, setTask] = useState("");

  return (
    <div className="each-day">
      <h2>{day.title}</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={(_) => {
          createTask(task);
          setTask("");
        }}
      >
        Create Task
      </button>
      <div className="task-wrapper">
        {day.tasks.map((task, taskIndex) => {
          return (
            <div className="each-task" key={taskIndex}>
              <h3 className={task.completed === true ? "line" : ""}>
                <a onClick={() => toggleTask(taskIndex)}>{task.title}</a>
                <a onClick={() => Deletetask(taskIndex)}>
                  <span>
                    <button><b>X</b></button>
                  </span>
                </a>
              </h3>
            </div>
          );
        })}
      </div>
      <button
        onClick={(_) => {
          remove();
        }}
      >
      <b>X</b>
      </button>
    </div>
  );
};

export default Card;