import { useState } from "react";

function App() {

let [counter, setCount] = useState(0)
 

    const addValue = ()=>{
    console.log("Value added", Math.floor(Math.random() *  10) + 1);
    counter += 1 
    setCount(counter)
    console.log("clicked", counter);

    }

    function removeVal(){
      counter -= 1
      setCount(counter)
    }
  return (
    <>
    <h1>Hello World</h1>
    <h2>Counter: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeVal}>Remove Value</button>
    </>

  );
}

export default App
