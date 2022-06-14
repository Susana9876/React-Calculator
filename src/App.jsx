import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const calcBtns = [];
  [9,8,7,6,5,4,3,2,1,0,".",",","%"].forEach(item =>{
    calcBtns.push(
      <button onClick={e => {
        setData(data + e.target.value)
      }}
      value = {item}
      key = {item}>
        {item}
        </button>
    )
  })
  const [people, setPeople] = useState([
    {
      name: "Susana",
      lastName: "Alba",
      age: 20,
      favouriteFood: "Hamburgers",
      favouriteColour: "Pink",
      counter: 0,
    },
  ]);
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <div className="show-input">Resultado : {data}</div>
        <div className="digits flex">{calcBtns}</div>
        <div className="modifiers subgrid">
          <button onClick={() => setData(data.substr(0, data.length - 1))}>
            Clear
          </button>
          <button onClick={() => setData("")}>AC</button>
        </div>
        <div className="operations subgrid">
          <button onClick={(e) => setData(data + e.target.value)} value="+">
            +
          </button>
          <button onClick={(e) => setData(data + e.target.value)} value="-">
            -
          </button>
          <button onClick={(e) => setData(data + e.target.value)} value="*">
            *
          </button>
          <button onClick={(e) => setData(data + e.target.value)} value="/">
            /
          </button>
          <button
            onClick={(e) => {
              try {
                setData(
                  String(eval(data)).length > 3 &&
                    String(eval(data)).includes(".")
                    ? String(eval(data).toFixed(4))
                    : String(eval(data))
                );
              } catch (err) {
                console.log(err);
              }
            }}
            value="="
          >
            =
          </button>
        </div>
      </div>
      <div className="users">
        <div className="inputs">
          <input
            className="input"
            placeholder="Nombre"
            type="text"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Apellido"
            type="text"
            name="lastName"
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
          <button
            className="button"
            onClick={() => {
              setPeople((current) => [{ name, lastName }, ...current]);
            }}
          >
            Add user
          </button>
        </div>
        <div className="list">
          <ul>
            {people.map((person, idx) => (
              <li id={idx}>{`${person.name} ${person.lastName}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
