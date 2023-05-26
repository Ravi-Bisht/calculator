import './App.css';
import { useState , useEffect } from 'react';

function App() {
  const [prevState , setPrevState]=useState('');
  const [currState , setCurrState]=useState('');
  const [input , setInput]=useState('0');
  const [operator , setOperator]=useState(null);
  const [total , setTotal] =useState(false);

  const inputDigit = (e) =>{
    if(currState.includes('.') && e.target.innerText==='.'){
      return;
    }

    if(total){
      setPrevState("");
    }

    currState ? setCurrState((pre) => pre + e.target.innerText) : setCurrState(e.target.innerText);

      setTotal(false)
  }

  useEffect(()=>{
    setInput(currState)

  },[currState])

  useEffect(() => {
    setInput("0");
  }, []);


const operatorType = (e) => {
  setTotal(false);
  setOperator(e.target.innerText);
  if (currState === "") return;
  if (prevState !== "") {
    equals(e);
  } else {
    setPrevState(currState);
    setCurrState("");
  }
};


  const equals = (e) => {
    if(e?.target.innerText === "="){
      setTotal(true)
    }
     let cal;

     
     if (operator === "/") {
       cal = String(
         parseFloat(prevState) / parseFloat(currState ? currState : "1")
       );
      //  console.log(cal);
     } else if (operator === "+") {      
       cal = String(parseFloat(prevState) + parseFloat(currState ? currState : '0'));
      //  console.log(cal);
     } else if (operator === "x") {
       cal = String(
         parseFloat(prevState) * parseFloat(currState ? currState : '1')
       );
      //  console.log(cal);
     } else if (operator === "-") {
       cal = String(
         parseFloat(prevState) - parseFloat(currState ? currState : '0')
       );
      //  console.log(cal);
     }
     
     setInput("");
     setPrevState(cal);
     setCurrState("");
     
  };
  
  const minusplus = () => {
    if (currState.charAt(0) === "-") {
      setCurrState(currState.substring(1));
    } else {
      setCurrState("-" + currState);
    }
  };
  const percent = () => {
    prevState
      ? setCurrState(String((parseFloat(currState) / 100) * prevState))
      : setCurrState(String(parseFloat(currState) / 100));
  };
  const clear = () => {  
    setPrevState("");
    setCurrState("");
    setInput("0");  
  };
  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          {total ? prevState  : input }
        </div>
        <div className="btn light-gray" onClick={clear}>
          AC
        </div>
        <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn light-gray" onClick={minusplus}>
          +/-
        </div>
        <div className="btn aquamarine" onClick={operatorType}>
          /
        </div>
        <div className="btn" onClick={inputDigit}>
          7
        </div>
        <div className="btn" onClick={inputDigit}>
          8
        </div>
        <div className="btn" onClick={inputDigit}>
          9
        </div>
        <div className="btn aquamarine" onClick={operatorType}>
          x
        </div>
        <div className="btn" onClick={inputDigit}>
          4
        </div>
        <div className="btn" onClick={inputDigit}>
          5
        </div>
        <div className="btn" onClick={inputDigit}>
          6
        </div>
        <div className="btn aquamarine" onClick={operatorType}>
          +
        </div>
        <div className="btn" onClick={inputDigit}>
          1
        </div>
        <div className="btn" onClick={inputDigit}>
          2
        </div>
        <div className="btn" onClick={inputDigit}>
          3
        </div>
        <div className="btn aquamarine" onClick={operatorType}>
          -
        </div>
        <div className="btn zero" onClick={inputDigit}>
          0
        </div>
        <div className="btn" onClick={inputDigit}>
          .
        </div>
        <div className="btn" onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
