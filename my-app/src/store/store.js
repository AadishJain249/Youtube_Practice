import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice'
import messageSlice from './chatSlice'
const store = configureStore({
    reducer:{
        app:appSlice,
        chat:messageSlice
    }
});
export default store;