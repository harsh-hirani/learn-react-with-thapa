import React,{useState} from "react";  

function App() {
  const [count,setCount] = useState(0);
  let sum = (a) => {setCount(count + 1);}
  let down = (a) => {setCount(count - 1);}
  return (
    <>
      <p>Count: {count}</p>
      <br />
      <button onClick={sum}>plus</button>
      <button onClick={down}>down</button>
    </>
  );
}

export default App;
