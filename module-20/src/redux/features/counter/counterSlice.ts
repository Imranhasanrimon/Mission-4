import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        }
    }
})
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;