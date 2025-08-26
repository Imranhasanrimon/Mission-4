import { configureStore } from '@reduxjs/toolkit'
import { itemsApi } from './api/itemCreateApi'

export const store = configureStore({
    reducer: {
        [itemsApi.reducerPath]: itemsApi.reducer
    },
    middleware: (getDefauldMiddleware) => getDefauldMiddleware().concat(itemsApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch