import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    users: IUser[],
}
const initialState: InitialState = {
    users: [],
}
const taskSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const id = uuidv4()
            const userData = {
                ...action.payload, id
            }
            state.users.push(userData)
        },

        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },

    }
})

export const selectUsers = (state: RootState) => {
    return state.user.users

}

export const { addUser, deleteUser } = taskSlice.actions

export default taskSlice.reducer;