import React from "react";
import ToDoCard from "../to-do-card/ToDoCard";
import "./style.css";

export default function ToDoContainer({ title, todos }) {
  return (
    <div className="container">
      <div className="title">{title}</div>

      <div className="to-dos">
        <ToDoCard
          severity="important"
          title="Task#10"
          date="Wed Aug 05 2020"
          progress="to-do"
        />
        <ToDoCard
          severity="normal"
          title="Task#7"
          date="Wed Aug 05 2020"
          progress="to-do"
        />
        <ToDoCard
          severity="urgent"
          title="Task#4"
          date="Wed Aug 05 2020"
          progress="to-do"
        />
      </div>
    </div>
  );
}
