import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { quizQuestions } from '@/home/quizData'

const initialState = {
    questions: quizQuestions,
    currentQuestionIndex: 0,
    userAnswer: Array(quizQuestions.length).fill(null),
    isCompleted: false
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            const { questionIndex, answer } = action.payload;
            state.userAnswer[questionIndex] = answer;
        },
        nextQuestion: (state) => {
            if (state.currentQuestionIndex < quizQuestions.length - 1)
                state.currentQuestionIndex += 1;
        },
        previousQuestion: (state) => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex -= 1;
            }
        }
    },
})

export const { setAnswer, nextQuestion, previousQuestion } = quizSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default quizSlice.reducer