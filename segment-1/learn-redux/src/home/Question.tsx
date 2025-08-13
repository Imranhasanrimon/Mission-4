import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks"
import QuizControls from "./QuizControls";

export default function Question() {
  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(state => state.quiz)
  // const { todo } = useAppSelector(state => state.todo)
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  const hanldeAnswerChange = (ans: string) => {
    console.log(ans);
  }

  return (
    <div>
      <Card className="w-96 mx-auto mt-5">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {
              currentQuestion.options.map((option, index) => <Button className="w-full" key={index} onClick={() => hanldeAnswerChange(option)}>{option}</Button>)
            }
          </div>
          <QuizControls></QuizControls>
        </CardContent>
      </Card>
    </div>
  )
}
