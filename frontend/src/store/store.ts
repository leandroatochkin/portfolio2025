import { configureStore } from '@reduxjs/toolkit'
import { commentsApi } from '../api/commentsApi'
import { publicationsApi } from '../api/publicationsApi';
import userReducer from './slices/User';
import themeReducer from './slices/Theme';

export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
    [publicationsApi.reducerPath]: publicationsApi.reducer,
    user: userReducer,
    theme: themeReducer
  },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(commentsApi.middleware)
        .concat(publicationsApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch