import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

function Dice({ type }) {
  const [roll, setRoll] = useState("roll");
  const [number, setNumber] = useState(1);
  const [diceArr, setDiceArr] = useState([{ roll: "roll" }, { roll: "roll" }]);
  const [sum, setSum] = useState(0);

  function randomRoll(i) {
    let randomIndex = Math.floor(Math.random() * type.length);
    setRoll(type[randomIndex]);
    setDiceDisplay(i);
    return type[randomIndex];
  }
  function setDiceDisplay(i) {
    let selectedDice = diceArr[i];
    return (selectedDice.roll = roll);
  }
  function rollAll() {
    diceArr.forEach((dice, index) => {
      dice.roll = randomRoll(index);
    });
  }

  function addQuantity() {
    if (number < 10) {
      setNumber(number + 1);
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
    <div className={styles.diceContainer}>
      <div className={styles.diceTextBox}>
        <h2 className={styles.activeDiceText}>{"d" + type.length}</h2>
        <h2 className={styles.activeDiceText}>
          {type.length === 2
            ? "coin"
            : "d" + type.length && type.length === 4
            ? "tetrahedron"
            : "d" + type.length && type.length === 6
            ? "cube"
            : "d" + type.length && type.length === 8
            ? "octohedron"
            : "d" + type.length && type.length === 10
            ? "pentagonal trapezohedron"
            : "d" + type.length && type.length === 12
            ? "dodecahedron"
            : "d" + type.length && type.length === 20
            ? "icosahedron"
            : "d" + type.length && type.length === 100
            ? "zocchihedron"
            : "d" + type.length && type.length === 120
            ? "disdyakis triacontahedron"
            : "d" + type.length}
        </h2>
      </div>
      <div className={styles.buttonBox}>
        <h5 className={styles.numberOfDiceText}>Dice in play:</h5>

        <button onClick={subtractQuantity}>Remove －</button>
        <button onClick={addQuantity}>Add ＋</button>
      </div>
      <button className={styles.rollAllButton} onClick={rollAll}>
        Roll All 🎲
      </button>
      <h4 className={styles.sum}>sum: {sum ? sum : "－"}</h4>
      <div className={styles.diceRowContainer}>
        {diceArr.map((d, i) => {
          return (
            <>
              <div
                key={i}
                onClick={() => randomRoll(i)}
                className={styles.dice}
              >
                <h3>{d.roll}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Dice;
