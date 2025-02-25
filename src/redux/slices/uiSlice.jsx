import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { 
        isGridView: true,
        isFilterOpen: false,
    },
    reducers: {
        toggleView: (state) => {
            state.isGridView = !state.isGridView;
        },
        toggleFilter: (state) => {
            state.isFilterOpen = !state.isFilterOpen;
        },
    },
});

export const { toggleView, toggleFilter } = uiSlice.actions;
export default uiSlice.reducer;
