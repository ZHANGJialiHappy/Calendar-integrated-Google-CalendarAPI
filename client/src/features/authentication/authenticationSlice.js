import { createSlice } from '@reduxjs/toolkit';

 const initialState = {
    email: "",
    familyName: "",
    givenName: "",
 } 
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authentication: (state, action) => {
        state.email = action.payload.email;
        state.familyName = action.payload.familyName;
        state.givenName = action.payload.givenName;
    }

  },
})

export const getUser=(state) => state.authentication;
export const { authentication } = authenticationSlice.actions;
export default authenticationSlice.reducer;