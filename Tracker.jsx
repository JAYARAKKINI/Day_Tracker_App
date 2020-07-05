import React from "react";
import Card from "./Card";

const Tracker = ({ days, createTask, toggleTask, Deletetask, remove }) => (
  <div className="main-container">
    {days.map((day, index) => (
      <Card
        key={index}
        day={day}
        createTask={(value) => createTask(index, value)}
        toggleTask={(taskIndex) => toggleTask(index, taskIndex)}
        Deletetask={(taskIndex) => Deletetask(index, taskIndex)}
        remove={() => remove(index)}
      />
    ))}
  </div>
);

export default Tracker;