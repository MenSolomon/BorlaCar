import { createSlice } from "@reduxjs/toolkit";

export const RequestDriverSlice = createSlice({
  name: "RequestedDriverData",
  initialState: {
    RequestedDriverArray: [],
    // loggedInUserObject: {},
  },

  reducers: {
    setRequestedDriverArray: (state, action) => {
      state.RequestedDriverArray = action.payload;
    },
  },
});

export const selectRequestedDriverArray = (state) =>
  state.RequestedDriverData.RequestedDriverArray;

export const { setRequestedDriverArray } = RequestDriverSlice.actions;
export default RequestDriverSlice.reducer;
