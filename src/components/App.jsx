import React, { useState } from "react";

function App() {
  const [item, setItem] = useState([]);

  function addItem() {
    const textInput = document.getElementById("input").value;
    setItem([...item, textInput]);
    document.getElementById("input").value = "";
  }

  const [toggleStrike, setToggleStrike] = useState("none");

  function strikethrough(index) {
    const updatedList = [...toggleStrike];
    updatedList[index] = !updatedList[index];
    setToggleStrike(updatedList);
  }

  function itemList() {
    // Use map to create a list of <li> elements
    return item.map((item, index) => (
      <li
        key={index}
        style={{
          textDecoration: toggleStrike[index] ? "none" : "line-through",
          cursor: "pointer",
        }}
        onClick={() => strikethrough(index)}
      >
        {item}
      </li>
    ));
  }

  // textDecoration={toggleStrike} onClick={strikethrough}

  return (
    <div className="container">
      <div className="heading">
        <h1>Abdul's To-Do List</h1>
      </div>
      <h6>* Type in the textbox and click "add"</h6>
      <h6>* Click on an item list to strike through it</h6>
      <br></br>
      <div className="form">
        <input id="input" type="text" />
        <button onClick={addItem}>
          <span>ADD</span>
        </button>
      </div>
      <div>
        <ul>{itemList()}</ul>
      </div>
    </div>
  );
}

export default App;
