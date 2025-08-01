import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const countSync = () => {
    setCount(() => count + 1)
  }
  const countASync = async () => {
    setTimeout(() => {
      setCount(() => count + 1)
    }, 3000)
  }

  return (

    <div className="card">
      <h1>Count is {count}</h1>

      <button onClick={countSync}>
        Click sync
      </button> <br />

      <button onClick={countASync}>
        Click ASync
      </button>


    </div>
  )
}

export default App
