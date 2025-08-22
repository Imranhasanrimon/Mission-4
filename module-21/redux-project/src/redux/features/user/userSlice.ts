import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    users: IUser[],
}
const initialState: InitialState = {
    users: [
        {
            name: "Iman Hasan",
            id: "80564190-e090-4072-ac76-270ef01cdd2b"
        },
        {
            name: "Asikur Rahman",
            id: "d5914547-61af-4a0f-8b8f-c14b73987649"
        },
        {
            name: "Md Sojib",
            id: "1f34a066-d4c7-44cd-949c-9e9dd474afae"
        },
        {
            name: "Saad",
            id: "b795a07c-362f-4970-b1ab-48d856e8f580"
        },
        {
            name: "Najmul Haq",
            id: "b7b72974-3529-4401-9ef0-03789a48ed95"
        }


    ],
}
const userSlice = createSlice({
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

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer;