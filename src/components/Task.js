import React from "react";

function Task ({text,category,deletedItem}){

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>deletedItem(text)} className="delete">X</button>
    </div>
  );
}

export default Task;