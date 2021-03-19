import React, { useState } from "react";
import "./App.css";
import Dice from "./components/dice";
import { d4, d6, d8, d10, d12, d20, d100, d120, coin } from "./diceTypes";
function App() {
  const [columnOne, setColumnOne] = useState(d6);
  const [columnTwo, setColumnTwo] = useState(d6);
  const [columnThree, setColumnThree] = useState(d6);

  return (
    <div className="App">
      <h2 className="heading">🎲Polyhedron Machine🎲</h2>
      <section className="dice-zone">
        <div id="dice-column" className="d6-zone">
          {
            <div className="selectContainer">
              <select
                className="select"
                onChange={(event) => {
                  event.persist();
                  setColumnOne(event.target.value.split(","));
                }}
              >
                <option value={d6} selected disabled hidden>
                  select dice:🎲
                </option>
                <option key="d4" id="d4" value={d4}>
                  d4
                </option>
                <option key="d6" id="d6" value={d6}>
                  d6
                </option>
                <option key="d8" id="d8" value={d8}>
                  d8
                </option>
                <option key="d10" id="d10" value={d10}>
                  d10
                </option>
                <option key="d12" id="d12" value={d12}>
                  d12
                </option>
                <option key="d20" id="d20" value={d20}>
                  d20
                </option>
                <option key="d100" id="d100" value={d100}>
                  d100
                </option>
                <option key="d120" id="d120" value={d120}>
                  d120
                </option>
                <option key="coin" id="coin" value={coin}>
                  coin
                </option>
              </select>
            </div>
          }
          <Dice type={columnOne} />
        </div>
        <div id="dice-column" className="d10-zone">
          {
            <select
              className="select"
              onChange={(event) => {
                event.persist();
                setColumnTwo(event.target.value.split(","));
              }}
            >
              <option value={d6} selected disabled hidden>
                select dice:🎲
              </option>
              <option key="d4" id="d4" value={d4}>
                d4
              </option>
              <option key="d6" id="d6" value={d6}>
                d6
              </option>
              <option key="d8" id="d8" value={d8}>
                d8
              </option>
              <option key="d10" id="d10" value={d10}>
                d10
              </option>
              <option key="d12" id="d12" value={d12}>
                d12
              </option>
              <option key="d20" id="d20" value={d20}>
                d20
              </option>
              <option key="d100" id="d100" value={d100}>
                d100
              </option>
              <option key="d120" id="d120" value={d120}>
                d120
              </option>
              <option key="coin" id="coin" value={coin}>
                coin
              </option>
            </select>
          }
          <Dice type={columnTwo} />
        </div>
        <div id="dice-column" className="d12-zone">
          {
            <select
              className="select"
              onChange={(event) => {
                event.persist();
                setColumnThree(event.target.value.split(","));
              }}
            >
              <option value={d6} selected disabled hidden>
                select dice:🎲
              </option>
              <option key="d4" id="d4" value={d4}>
                d4
              </option>
              <option key="d6" id="d6" value={d6}>
                d6
              </option>
              <option key="d8" id="d8" value={d8}>
                d8
              </option>
              <option key="d10" id="d10" value={d10}>
                d10
              </option>
              <option key="d12" id="d12" value={d12}>
                d12
              </option>
              <option key="d20" id="d20" value={d20}>
                d20
              </option>
              <option key="d100" id="d100" value={d100}>
                d100
              </option>
              <option key="d120" id="d120" value={d120}>
                d120
              </option>
              <option key="coin" id="coin" value={coin}>
                coin
              </option>
            </select>
          }
          <Dice type={columnThree} />
        </div>
      </section>
    </div>
  );
}

export default App;
