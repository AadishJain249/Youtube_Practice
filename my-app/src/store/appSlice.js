import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "app",
  initialState: {
   flag:true
  },
  reducers: {
    showSide :(state,action)=>{
        state.flag=!state.flag
    },
    toggleMenu:(state)=>{
      state.flag=false
    }
  },
});
export const { showSide,toggleMenu } = appSlice.actions;
export default appSlice.reducer;
