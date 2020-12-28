import React from "react";
import "./style.css";

export default function ToDoCard({
  description,
  title,
  date,
  severity='important',
  variant,
  progress,
}) {
//   const severityClassName = `to-do-card-${severity}` : "";
//   const severityType = severity ? `severity-${severity}` : "";
  return (
    <div className={`to-do to-do-card-${severity}`}>
      <p>{title}</p>
      <div className="col">
        <p className={`sev severity-${severity}`}>{severity}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
