import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articlesSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        ui: uiReducer,
    },
});

export default store;
