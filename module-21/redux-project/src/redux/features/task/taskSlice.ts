import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
    task: ITask[]
}
const initialState: InitialState = {
    task: [
        {
            id: "aqpowiru",
            title: "Initialize Frontend",
            description: "It is really important to initialize frontend before backend",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        }
    ]
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer;