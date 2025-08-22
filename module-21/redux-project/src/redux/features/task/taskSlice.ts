import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { deleteUser } from "../user/userSlice";

interface InitialState {
    tasks: ITask[],
    filter: "All" | "High" | "Medium" | "Low"
}
const initialState: InitialState = {
    tasks: [
        {
            title: "Redux Assingment",
            description: "Enthusiastically monetize efficient core competencies vis-a-vis scalable collaboration and idea-sharing. Efficiently underwhelm.",
            priority: "High",
            assignTo: "80564190-e090-4072-ac76-270ef01cdd2b",
            dueDate: "2025-09-04T18:00:00.000Z",
            id: "170cbb1d-22bb-4fd2-a125-35347b518c70",
            isCompleted: false
        },
        {
            title: "Express Assingment",
            description: "Enthusiastically monetize efficient core competencies vis-a-vis scalable collaboration and idea-sharing. Efficiently underwhelm.",
            priority: "High",
            assignTo: "d5914547-61af-4a0f-8b8f-c14b73987649",
            dueDate: "2025-09-04T18:00:00.000Z",
            id: "170cbb1d-22bb-4fd2-a125-35547b518c70",
            isCompleted: false
        },
        {
            title: "TypeScript Assingment",
            description: "Enthusiastically monetize efficient core competencies vis-a-vis scalable collaboration and idea-sharing. Efficiently underwhelm.",
            priority: "Low",
            assignTo: "1f34a066-d4c7-44cd-949c-9e9dd474afae",
            dueDate: "2025-09-04T18:00:00.000Z",
            id: "170cbb1d-22bb-4fd2-b125-35547b518c70",
            isCompleted: false
        },
    ],
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
    },
    extraReducers: (builder) => {
        builder.addCase(deleteUser, (state, action) => {
            state.tasks.forEach(task => {
                task.assignTo === action.payload ? (task.assignTo = undefined) : task
            })
        })
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