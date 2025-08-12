import { useAppSelector } from "@/redux/hooks"

export default function Question() {
  const { questions } = useAppSelector(state => state.quiz)
  const { todo } = useAppSelector(state => state.todo)
  console.log(questions);
  console.log(todo);
  return (
    <div>Question</div>
  )
}
