import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { nextQuestion, previousQuestion } from "@/redux/quizSlice";

export default function QuizControls() {
    const dispatch = useAppDispatch()
    return (
        <div className="flex justify-between mt-3">
            <Button variant="outline" onClick={() => dispatch(previousQuestion())}>Previous</Button>
            <Button variant="outline" onClick={() => dispatch(nextQuestion())}>Next</Button>
        </div >
    )
}
