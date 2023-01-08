// Import react
import { useState } from "react";

export default function useCalc() {
  const [result, setResult] = useState("");

  const addToResult = (content) => {
    setResult((prev) => prev + content);
  };

  const submit = () => {
    setResult((prev) => {
      let operation = prev;
      let validOpreation = operation.replace(/x/g, "*").replace(/÷/g, "/");
      // eslint-disable-next-line no-eval
      return eval(validOpreation).toString();
    });
  };

  const remove = () => {
    setResult((prev) => prev.slice(0, -1));
  };

  const clear = () => {
    setResult("");
  };

  return { result, addToResult, submit, remove, clear };
}
