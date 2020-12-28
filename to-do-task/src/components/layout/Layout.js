import React from "react";
import ToDoContainer from "../to-do-container/ToDoContainer";
import "./style.css";

export default function Layout({children}) {
  return (
    <div>
      <div className="layout">
        <nav>
          <ul>
            <li className="logo">LOGO</li>
            <li>My To Do App</li>
            <li>item3</li>
          </ul>
        </nav>

        <div className="containers">
          <ToDoContainer title="To Do" />
          <ToDoContainer title="In Progress" />
          <ToDoContainer title="Done" />
        </div>
      </div>
    </div>
  );
}
