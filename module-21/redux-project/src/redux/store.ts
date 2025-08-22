import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import taskReducer from "./features/task/taskSlice"
import userReducer from "./features/user/userSlice"
import { baseAPI } from "./api/baseAPI";

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        // todo: taskReducer,
        // user: userReducer
        [baseAPI.reducerPath]: baseAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;