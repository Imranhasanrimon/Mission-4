import './App.css'
import Question from './home/Question'
import QuizSummary from './home/QuizSummary'
import { useAppSelector } from './redux/hooks'

function App() {
  const { isCompleted } = useAppSelector(state => state.quiz)
  return (
    <>
      {isCompleted ? <QuizSummary /> : <Question />}
    </>
  )
}

export default App
