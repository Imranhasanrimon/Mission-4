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

  //normal function
  const add = (a, b) => a + b;

  //function currying
  const add2 = (a) => (b) => a + b;

  return (

    <div>
      <h1>Counter With Redux</h1>

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

    </div>
  )
}

export default App
