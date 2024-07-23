// storage.js
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice.js';
import employeeSlice from './employeeSlice.js';

export default configureStore({
    reducer: {
        // Register reducers here
        counter: counterSlice,
        employee: employeeSlice,
    },
});
