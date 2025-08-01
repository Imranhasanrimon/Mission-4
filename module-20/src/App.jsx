import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice"

function App() {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counter)

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (

    <div>
      <h1>Counter With Reduxt</h1>

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

    </div>
  )
}

export default App
