import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import {recipeApi} from './queries/recipeQuery';

const store = configureStore({
  reducer: {authReducer, [recipeApi.reducerPath]: recipeApi.reducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(recipeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
