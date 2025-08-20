import { useDispatch, useSelector } from "react-redux"
import { increment } from "./redux/features/counter/counterSlice"


function App() {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counter)
  return (

    <div>
      <h1>Counter With Redux</h1>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <div>{count}</div>
        <button style={{ backgroundColor: "green" }} >Decrement</button>
      </div>

    </div>
  )
}

export default App
