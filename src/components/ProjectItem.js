import React from "react";

function ProjectItem({ name, about, technologies }) {
  let unique = 1;
  const display = technologies.map((value)=>{
    return <span key={unique++}>{value}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {display}
      </div>
    </div>
  );
}

export default ProjectItem;
