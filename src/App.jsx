
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { useState } from 'react';
function App() {

  const [opResult, setOpResult] = useState({
    firstValue: "-",
    secondValue: "-",
    result: "",
    opValue:""
  });

  
  const getResult = () => {
    return opResult.opValue == "" || opResult.opValue=="=" ? opResult.firstValue == '-' ? "0" : opResult.firstValue : opResult.secondValue == '-' ? "0" : opResult.secondValue;
    }
  const onClickHandler = (text) => {

   

    if ((text == "=" || text=="+"  ||text=="*"||text=="/")) {
      if(opResult.firstValue != "-" && opResult.secondValue != "-"){
        switch (opResult.opValue) {
          case "+":
            setOpResult((item) => {
              return {
                ...item, firstValue: (parseFloat(item.firstValue) + parseFloat(item.secondValue)).toFixed(2).replace(/[.,]00$/, ""), opValue: text,
                secondValue: '-'
              
              };
            });
            break;
          case "-":
            setOpResult((item) => { return { ...item, firstValue: (parseFloat(item.firstValue) - parseFloat(item.secondValue)).toFixed(2).replace(/[.,]00$/, ""), opValue: text == "=" ? "" : text, secondValue: '-' }; });
            break;
          case "*":
            setOpResult((item) => { return { ...item, firstValue: (parseFloat(item.firstValue) * parseFloat(item.secondValue)).toFixed(2).replace(/[.,]00$/, ""), opValue: text == "=" ? "" : text, secondValue: '-' }; });
            break;
          case "/":
            setOpResult((item) => { return { ...item, firstValue: (parseFloat(item.firstValue) / parseFloat(item.secondValue)).toFixed(2).replace(/[.,]00$/, ""), opValue: text == "=" ? "" : text, secondValue: '-' }; });
            break;
        
        }
             
            
        
      } else {
           setOpResult((item) => { return { ...item, firstValue: (parseFloat(item.firstValue)).toFixed(2).replace(/[.,]00$/, "") ,opValue:text=="="?"":text,  secondValue:'-' }; });
        }
      return;
    }

     if (text == "+" || text == "*" || text == "/" || text == "-") {
       setOpResult((item) => { return {...item,opValue :text }; });
      return;
    }

    if (opResult.opValue == "+" || opResult.opValue=="*" ||opResult.opValue=="/" ||opResult.opValue=="-") {
          setOpResult((item) => { return {...item,secondValue :(item.secondValue == "-") ? text : item.secondValue + text}; });     
      return;
    }

    setOpResult((item) => { return {...item,firstValue :(item.firstValue == "-") ? text : item.firstValue + text}; });
  }


  return (
    <>
      <div className="container-div">
        <input type='text' placeholder='Enter text' className='textInputStyle' readOnly={true} value={getResult()}/>
        <button type="button" className="buttonStyle" onClick={() => { 
          onClickHandler("0");
        }}>0</button>
        <button type="button" className="buttonStyle" onClick={() => { onClickHandler("1"); }}>1</button>
        <button type="button" className="buttonStyle" onClick={() => {  onClickHandler("2");}}>2</button>
        <button type="button" className="buttonStyle" onClick={() => { onClickHandler("3");}}>3</button>
        <button type="button" className="buttonStyle" onClick={() => {  onClickHandler("4");}}>4</button>
        <button type="button" className="buttonStyle" onClick={() => {  onClickHandler("5");}}>5</button>
        <button type="button" className="buttonStyle" onClick={() => {  onClickHandler("6");}}>6</button>
        <button type="button" className="buttonStyle"  onClick={() => { onClickHandler("7"); }}>7</button>
        <button type="button" className="buttonStyle" onClick={() => { onClickHandler("8"); }}>8</button>
        <button type="button" className="buttonStyle" onClick={() => {  onClickHandler("9");}}>9</button>
        <button type="button" className="buttonOpStyle" onClick={() => { onClickHandler("+"); }}>+</button>
        <button type="button" className="buttonOpStyle" onClick={() => {onClickHandler("-"); }}>-</button>
        <button type="button" className="buttonOpStyle" onClick={() => {onClickHandler("*"); }}>*</button>
        <button type="button" className="buttonOpStyle" onClick={() => { onClickHandler("/");}}>/</button>
         <button type="button" className="buttonOpStyle" onClick={() => {onClickHandler("="); }}>=</button>
        <button type="button" className="buttonClearStyle" onClick={() => { 
            setOpResult({
          firstValue: "-",
            secondValue: "-",
            result: "",
            opValue:""
  })
     }}>CLEAR</button>
      </div>
    </>
  )
}

export default App
