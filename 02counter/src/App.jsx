/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 5;

  let [counter, setCounter ] = useState(0);

  function addValue(){
    if(counter<20){
    setCounter(counter+1)
    }else {
      console.log("Counter cannot go above 20");
    }
  }

  function subValue(){
    if (counter>0) {
      setCounter(counter-1);
    }else {
      console.log("Counter cannot go below 0");
    }
  }

  return (
    <>
      <h1>Mayur Chaudhary</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>ADD</button>
      <br />
      <button onClick={subValue}>SUB</button>
    </>
  )
}

export default App
