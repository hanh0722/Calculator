import React from "react";
import Button from "../Button/Button";
import styles from "./ListButton.module.scss";
import { useSelector } from "react-redux";
const buttonCalculator = [
  "AC",
  "DEL",
  "÷",
  7,
  8,
  9,
  "x",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

const ListButton = ({ getValueButton }) => {
  const currentResult = useSelector(state => state.calculator.currentResult);
  const lastResult = useSelector(state => state.calculator.lastResult);
  const operator = useSelector(state => state.calculator.operator);
  return (
    <>
      <div className={styles.output}>
        <div className={styles["last-output"]}>{lastResult} {operator ? operator : ''}</div>
        <div className={styles["current-output"]}>{currentResult}</div>
      </div>
      {buttonCalculator.map((items, index) => {
        if (index === 0 || index === 1 || index === buttonCalculator.length) {
          return (
            <Button
              onClick={() => getValueButton(items)}
              key={index}
              className={`${styles.btn} ${styles["span-2"]}`}
            >
              {items}
            </Button>
          );
        }
        return (
          <Button
            onClick={() => getValueButton(items)}
            className={styles.btn}
            key={index}
          >
            {items}
          </Button>
        );
      })}
    </>
  );
};

export default ListButton;
