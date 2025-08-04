import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
    tasks: ITask[]
}
const initialState: InitialState = {
    tasks: [
        {
            id: "aqpowiru",
            title: "Initialize Frontend",
            description: "It is really important to initialize frontend before backend",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "aqpo5iru",
            title: "Github initialization Frontend",
            description: "It is really important to initialize frontend before backend",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Medium"
        },
        {
            id: "aqp8wiru",
            title: "Initialize Backend",
            description: "It is really important to initialize frontend before backend",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Low"
        },
    ]
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}

export default taskSlice.reducer;