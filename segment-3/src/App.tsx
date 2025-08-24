import './App.css'
import { Button } from './components/ui/button'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch()
  return (
    <div className='flex items-center gap-5 justify-center'>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <h2 className='text-5xl'>{value}</h2>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
    </div>
  )
}

export default App
