// Import react
import React from "react";

// Import hooks
import useCalc from "./useCalc";

// Import css
import "./Calculator.scss";

function CalcHead(props) {
  const content = props.content;

  return (
    <div className="cacl-head mb-3 w-100">
      <div className="calc-screen text-black rounded px-3 py-2">
        <h4 className="text-wrapper m-0">{content}</h4>
      </div>
    </div>
  );
}

function CalcBody(props) {
  const { addToResult, clear, remove, submit } = props.actions;
  const items = [
    [{ value: "(" }, { value: ")" }, { value: "C", action: clear }, { value: "Rem", action: remove }],
    [{ value: 7 }, { value: 8 }, { value: 9 }, { value: "x" }],
    [{ value: 4 }, { value: 5 }, { value: 6 }, { value: "÷" }],
    [{ value: 1 }, { value: 2 }, { value: 3 }, { value: "-" }],
    [{ value: 0 }, { value: "." }, { value: "=", action: submit }, { value: "+" }],
  ];

  return (
    <div className="calc-body">
      <div className="container-fluid p-0">
        {items.map((row, index) => (
          <div className="row gx-2 mb-2" key={index}>
            {row.map((item, index) => (
              <div className="col" key={index}>
                <CalcButton onClick={item.action || (() => addToResult(item.value))}>
                  {item.value}
                </CalcButton>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CalcButton(props) {
  const { onClick } = props;

  return (
    <button className="calc-btn w-100 p-2" onClick={onClick}>
      {props.children}
    </button>
  );
}

export default function Calculator() {
  const { result, addToResult, submit, remove, clear } = useCalc();

  return (
    <div className="wrapper text-bg-dark">
      <div className="container">
        <div className="calculator mw-75 rouned m-auto">
          <CalcHead content={result} />
          <CalcBody actions={{ addToResult, submit, remove, clear }} />
        </div>
      </div>
    </div>
  );
}
