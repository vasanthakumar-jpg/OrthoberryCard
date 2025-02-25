import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../../components/Dummy';

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: dummyData.articles,
        selectedTopics: [],
    },
    reducers: {
        toggleTopic : (state, action) => {
            const topic = action.payload;
            state.selectedTopics.includes(topic)
                ? (state.selectedTopics = state.selectedTopics.filter((t) => t !== topic))
                : state.selectedTopics.push(topic);
        },
    },
});

export const { toggleTopic } = articlesSlice.actions;
export default articlesSlice.reducer;
