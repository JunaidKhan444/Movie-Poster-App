import { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  
  //Hook
  const [counter,setCounter] = useState(0);

  //Happens at the start, when page is loaded
  //Hook
  useEffect(() => {
      setCounter(100);
  },[])

  return (
    <div className="App">
      <br></br>
     <button onClick={() => setCounter((prevCount) => prevCount-1) }>-</button>
     <h1>{counter}</h1>
     <button onClick={() => setCounter((prevCount) => prevCount+1) }>+</button>
    </div>
    
  );
}

export default App;
