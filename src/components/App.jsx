import React, {useState} from "react";
import Emojis from "./Emojis";

function App() {
  let time = new Date().toLocaleTimeString();
  let [count, setCount] = useState(time);


  function sayHi() {
     setCount(new Date().toLocaleTimeString());
   }
   setInterval(sayHi, 1000);

  return (
    <div className="container">
      <h1>{count}</h1>
      <Emojis seconds={new Date().getSeconds()}/>
    </div>
  );
}

export default App;
