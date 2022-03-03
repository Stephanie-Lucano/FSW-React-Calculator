import {useState} from "react"
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState("")
  const [previousValue, setPreviousValue] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState(0)

  const operators = ["/", "*", "+", "-"]

  const updateCalc = (value) => {
    // guard clause
    if (operators.includes(value) && displayValue==="" ||operators.includes(value) && operators.includes(displayValue.slice(-1))) {
      return
    }

    setDisplayValue(displayValue + value)
  }

  const handleOperator = (value) => {
    setOperation(value)
    setPreviousValue(displayValue)
    setDisplayValue("")
  }

  const handleResult = () => {
    setDisplayValue("")
    switch(operation) {
      case "+": 
          setResult(Number(previousValue) + Number(displayValue))
          break;
      case "-":
          setResult(Number(previousValue) - Number(displayValue))
          break;
      case "*":
          setResult(Number(previousValue) * Number(displayValue))
          break;
      case "/": 
          setResult(Number(previousValue) / Number(displayValue))
          break;
      default:
          console.log("Click on an operation")
    }
  }

  const handleAllClear = () => {
    setDisplayValue("")
    setPreviousValue("")
    setOperation("")
    setResult("")
  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="display">
          {result ? <span>({result})</span> : ""} 
          { displayValue || "0"}
        </div>

        <div className="buttons">
          <button onClick={() => updateCalc("7")}
          >7</button>
          <button onClick={() => updateCalc("8")}
          >8</button>
          <button onClick={() => updateCalc("9")}
          >9</button>
          <button onClick={() => handleOperator("+")}
          >+</button>
          <button onClick={() => updateCalc("4")}
          >4</button>
          <button onClick={() => updateCalc("5")}
          >5</button>
          <button onClick={() => updateCalc("6")}
          >6</button>
          <button onClick={() => handleOperator("-")}
          >-</button>
          <button onClick={() => updateCalc("1")}
          >1</button>
          <button onClick={() => updateCalc("2")}
          >2</button>
          <button onClick={() => updateCalc("3")}
          >3</button>
          <button onClick={() => handleOperator("*")}
          >*</button>
          <button onClick={handleAllClear}
          >AC</button>
          <button onClick={() => updateCalc("0")}
          >0</button>
          <button onClick={handleResult}
          >=</button>
          <button onClick={() => handleOperator("/")}
          >/</button>
        </div>

      </div>
    </div>
  );
}

export default App;
