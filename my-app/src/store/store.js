import { configureStore } from "@reduxjs/toolkit";
import appSlice from '../store/appSlice'
const store = configureStore({
    reducer:{
        app:appSlice
    }
});
export default store;