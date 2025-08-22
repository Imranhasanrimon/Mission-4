import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[],
    filter: "All" | "High" | "Medium" | "Low"
}
const initialState: InitialState = {
    tasks: [],
    filter: "All"
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = uuidv4()
            const taskData = {
                ...action.payload, id, isCompleted: false
            }
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach(task => {
                task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task
            })
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        updateTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.forEach(task => {
                if (task.id === action.payload.id) {
                    const taskData = {
                        ...action.payload, isCompleted: task.isCompleted
                    }
                    task = taskData
                }
            })
        },
        changePriority: (state, action: PayloadAction<"All" | "High" | "Medium" | "Low">) => {
            state.filter = action.payload
        }
    }
})

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter
    if (filter === "High") {
        return state.todo.tasks.filter(task => task.priority === "High")
    } else if (filter === "Medium") {
        return state.todo.tasks.filter(task => task.priority === "Medium")
    } else if (filter === "Low") {
        return state.todo.tasks.filter(task => task.priority === "Low")
    } else return state.todo.tasks

}

export const { addTask, toggleCompleteState, deleteTask, updateTask, changePriority } = taskSlice.actions

export default taskSlice.reducer;