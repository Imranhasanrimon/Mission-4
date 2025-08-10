import { useAppSelector } from "@/redux/hooks"

export default function Question() {
  const { value } = useAppSelector(state => state.quiz)
  return (
    <div>Question</div>
  )
}
