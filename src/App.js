import React, { useState } from "react";
import ToDolist from "./ToDolist";

const App = () => {
  const [Todo, PrevTodo] = useState("");
  const [items, setItems] = useState([]);
  const inputText = (event) => {
    PrevTodo(event.target.value);
  };
  const listOfitems = () => {
    setItems((oldItems) => {
      return [...oldItems, Todo];
    });
    PrevTodo("");
  };

  const deleteTodo=(id)=>{
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      }
      );
    });
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            value={Todo}
            onChange={inputText}
          />
          <button onClick={listOfitems}>+</button>
          <ol>
            {items.map((item, index) => {
              return <ToDolist key={index} id={index} text={item} onSelect={deleteTodo} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
