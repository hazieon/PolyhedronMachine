import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

function Dice({ type }) {
  const [roll, setRoll] = useState("roll");
  const [number, setNumber] = useState(1);
  const [diceArr, setDiceArr] = useState([{ roll: "roll" }]);
  const [sum, setSum] = useState(0);

  function randomRoll(i) {
    let randomIndex = Math.floor(Math.random() * type.length);
    setRoll(type[randomIndex]);
    setDiceDisplay(i);
    return type[randomIndex];
  }
  function setDiceDisplay(i) {
    let selectedDice = diceArr[i];
    // console.log(selectedDice);
    return (selectedDice.roll = roll);
  }
  function rollAll() {
    diceArr.forEach((dice, index) => {
      dice.roll = randomRoll(index);
    });
  }

  function addQuantity() {
    if (number < 6) {
      setNumber(number + 1);
      //   console.log(number);
      setDiceArr([...diceArr, { roll: "roll" }]);
    } else {
      setNumber(number);
    }
  }

  function subtractQuantity() {
    if (number > 1) {
      setNumber(number - 1);
      setDiceArr(diceArr.splice(0, diceArr.length - 1));
    } else {
      setNumber(number);
    }
  }

  useEffect(() => {
    if (diceArr[0].roll !== "roll") {
      setSum(
        diceArr.reduce((acc, cur) => {
          return acc + Number(cur.roll);
        }, 0)
      );
    }
  }, [roll]);

  return (
    <>
      <button onClick={addQuantity}>add</button>
      <button onClick={subtractQuantity}>subtract</button>
      <p></p>
      <button onClick={rollAll}>roll all</button>
      <h1>Active Dice:d{type.length}</h1>
      <p>
        sum:
        {sum ? sum : "－"}
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
