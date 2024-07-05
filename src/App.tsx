import "./App.css";
import { useCallback, useState } from "react";
import JupiterianTime from './components/JupiterianTime';

const sum = (a: number, b: number) => a + b;
const multiplication = (a: number, b: number) => a * b;
const subtraction = (a: number, b: number) => a - b;
const division = (a: number, b: number) => a / b;

interface IOperation {
  func: (a: number, b: number) => number;
  symbol: string;
}

type OperationObject = {
  [key in Operation]: IOperation;
};

type Operation = "sum" | "subtraction" | "multiplication" | "division";

const operations: OperationObject = {
  sum: { func: sum, symbol: "+" },
  subtraction: { func: subtraction, symbol: "-" },
  multiplication: { func: multiplication, symbol: "x" },
  division: { func: division, symbol: "/" },
};

function App() {
  const [currentValue, updateCurrent] = useState<number | undefined>(undefined);
  const [chiffre, updateChiffre] = useState<number | undefined>(undefined);
  const [operation, updateOp] = useState<Operation | undefined>(undefined);
  const [isDecimal, setIsDecimal] = useState<boolean>(false);

  const handleNumClick = useCallback(
    (num: number) => {
      let myNum = num;
      if (operation) {
        if (chiffre || chiffre === 0) {
          if (isDecimal) {
            updateChiffre(parseFloat(chiffre.toString() + "." + myNum.toString()));
            setIsDecimal(false);
          } else {
            updateChiffre(chiffre * 10 + myNum);
          }
        } else {
          updateChiffre(myNum);
        }
      } else {
        if (currentValue || currentValue === 0) {
          if (isDecimal) {
            updateCurrent(parseFloat(currentValue.toString() + "." + myNum.toString()));
            setIsDecimal(false);
          } else {
            updateCurrent(currentValue * 10 + myNum);
          }
        } else {
          updateCurrent(myNum);
        }
      }
    },
    [currentValue, operation, chiffre, isDecimal]
  );

  const handleSignChange = useCallback(() => {
    if (operation) {
      if (chiffre || chiffre === 0) {
        updateChiffre(chiffre * -1);
      }
    } else {
      if (currentValue || currentValue === 0) {
        updateCurrent(currentValue * -1);
      }
    }
  }, [currentValue, operation, chiffre]);

  const handleDecimal = () => {
    setIsDecimal(true);
  };

  const handleReset = () => {
    updateCurrent(undefined);
    updateChiffre(undefined);
    updateOp(undefined);
    setIsDecimal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="screen">
          {`${currentValue || 0} ${
            currentValue && operation ? operations[operation].symbol : ""
          } ${
            currentValue && operation && (chiffre || chiffre === 0) ? chiffre : ""
          }`}
        </div>
        <div>
          {Object.keys(operations).map((opName) => (
            <button key={opName} onClick={() => updateOp(opName as Operation)}>
              {operations[opName as Operation].symbol}
            </button>
          ))}
        </div>
        <div className="numbers">
          {new Array(10)
            .fill("")
            // .map((e, i) => i)
            .map((e) => (
              <button key={e} id={e.toString()} onClick={() => handleNumClick(e)}>
                {e}
              </button>
            ))}
          <button onClick={handleDecimal}>.</button>
        </div>
        <button onClick={handleSignChange}>+/-</button>
        <button onClick={handleReset}>C</button>
        <button
          className="btnEqual"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            if ((currentValue && operation && (chiffre || chiffre === 0)) || chiffre === 0) {
              const res = operations[operation!].func(currentValue!, chiffre!);
              updateCurrent(res);
              updateChiffre(undefined);
              updateOp(undefined);
              setIsDecimal(false);
            }
          }}
        >
          =
        </button>
      </header>
      <JupiterianTime />
    </div>
  );
}

export default App;
