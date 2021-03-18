import React, { useState } from "react";
import styles from "./index.module.css";

function Dice({ type }) {
  const [roll, setRoll] = useState();
  const [number, setNumber] = useState(1);
  const [diceArr, setDiceArr] = useState([{ roll: "roll" }]);
  console.log({ type });

  function randomRoll(i) {
    let randomIndex = Math.floor(Math.random() * type.length);
    setRoll(type[randomIndex]);
    console.log(i);
    setDiceDisplay(i);
    return type[randomIndex];
  }
  function setDiceDisplay(i) {
    let selectedDice = diceArr[i];
    // console.log(selectedDice);
    return (selectedDice.roll = roll);
  }
  function addQuantity() {
    if (number < 6) {
      setNumber(number + 1);
      console.log(number);
      setDiceArr([...diceArr, { roll: "roll" }]);
    } else {
      console.log(number);
      setNumber(number);
    }
  }

  function subtractQuantity() {
    if (number > 1) {
      setNumber(number - 1);
      console.log(number);
      setDiceArr(diceArr.splice(0, diceArr.length - 1));
    } else {
      console.log(number);
      setNumber(number);
    }
  }
  return (
    <>
      <button onClick={addQuantity}>add</button>
      <button onClick={subtractQuantity}>subtract</button>
      <p></p>
      <button>roll all</button>
      <h1>Active Dice:d{type.length}</h1>
      <p>
        sum:
        {diceArr.reduce((acc, cur) => {
          return acc + cur.roll;
        }, 0)}
      </p>

      {diceArr.map((d, i) => {
        return (
          <>
            <div key={i} className={styles.dice}>
              <h3>{d.roll}</h3>
            </div>
            <button onClick={() => randomRoll(i)}>roll</button>
          </>
        );
      })}
    </>
  );
}

export default Dice;

// <div className={styles.dice}>
//                 <h3>{d.roll}</h3>
//               </div>
//               <button onClick={() => randomRoll(diceChoice.value, i)}>
//                 Roll
//               </button>
