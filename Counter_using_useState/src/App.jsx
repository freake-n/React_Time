// Counter between 0 ~ 20

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  const add = () => {
    if(count<=19){
      setCount(count + 1);
    }
  };

  const rem = () => {
    if(count>=1){
      setCount(count - 1);
    }
  };

  return (
    <>
      
        <h2>Counter = {count}</h2>

        <button onClick={add}>
          Add : {count}
        </button>
    
        <button onClick={rem}>
          Remove : {count}
        </button>

    </>
  )
}

export default App
