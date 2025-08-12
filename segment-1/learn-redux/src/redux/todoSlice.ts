import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { todoData } from '@/home/todoData'


// Define the initial state using that type
const initialState = {
    todo: todoData,
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
})

// export const { increment, decrement, incrementByAmount } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default todoSlice.reducer