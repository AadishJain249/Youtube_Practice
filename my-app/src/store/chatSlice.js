import { createSlice } from "@reduxjs/toolkit";
const messageSlice = createSlice({
  name: "chat",
  initialState: {
   messages:[]
  },
  reducers: {
    addMessage :(state,action)=>{
      state.messages.splice(10,1)
        state.messages.push(action.payload)
    }
  },
});
export const { addMessage} = messageSlice.actions;
export default messageSlice.reducer;
