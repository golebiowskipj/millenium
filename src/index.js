import React, { useState } from "react";
import { render } from "react-dom";
import "./style.scss";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";

const MAX_EMPLS = 5;

function App() {
  const [input, setInput] = useState("");
  const [employees, setEmployees] = useState([
    { name: "Jan", surname: "Kowalski" },
  ]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addEmployee = (e) => {
    if (employees.length >= MAX_EMPLS) return;

    const normalizedInput = normalizeInput(input);

    setEmpls([...employees, normalizedInput]);
  };

  const normalizeInput = (input) => {
    //   convert input from string to object with name and surname keys

    return input;
  };

  return (
    <>
      <TextInput value={input} onChange={handleInput} />
      <Button disabled={empls.length >= MAX_EMPLS} onClick={addEmployee}>
        Dodaj
      </Button>
    </>
  );
}

render(<App />, document.getElementById("root"));
