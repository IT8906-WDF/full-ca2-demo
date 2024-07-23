// RecordSlice.js
import { createSlice } from '@reduxjs/toolkit';

const recordSlice = createSlice({
    name: 'Counter Slice',
    initialState: {
        value: { count: 0 }, // Starts from 0
    },
    reducers: {
        increment: function (state, action) {
            const amountToIncreaseBy = action.payload || 1;
            state.value.count += amountToIncreaseBy;
        },
    },
});

// Dispatch these to update the state in your component
export const { increment } = recordSlice.actions;

// This part gets registered into the store.
export default recordSlice.reducer;
