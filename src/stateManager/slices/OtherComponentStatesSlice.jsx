import { createSlice } from "@reduxjs/toolkit";

export const OtherComponentStatesSlice = createSlice({
  name: "OtherComponentStates",
  initialState: {
    loginStatus: false
  },

  reducers: {
    
    setLoginStatus:(state,action)=>{
      state.loginStatus=action.payload
    }
  },
});

  export const selectLoginStatus= (state) =>
  state.OtherComponentStates.loginStatus;

export const { setLoginStatus } =
  OtherComponentStatesSlice.actions;
export default OtherComponentStatesSlice.reducer;
