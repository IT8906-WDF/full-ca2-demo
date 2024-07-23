// RecordSlice.js
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'Employee Slice',
    initialState: {
        value: [
            { name: 'Jeremiah Ang', score: 18, report: 'Doing well!' },
            { name: 'John Tan', score: 27, report: 'Did alot of things!' },
            { name: 'Linus Lim', score: 7, report: 'Did not come to work' },
            { name: 'Tommy Koh', score: 32, report: 'Great team player' },
            { name: 'Alice Chan', score: 18, report: 'Does her work well' },
        ], // Starts from 0
    },
    reducers: {
        add: function (state, action) {
            state.push(action.payload);
        },
    },
});

// Dispatch these to update the state in your component
export const { add } = employeeSlice.actions;

// This part gets registered into the store.
export default employeeSlice.reducer;
