import { createSlice } from '@reduxjs/toolkit';

 const initialState = {
    email: "",
    familyName: "",
    givenName: "",
    token: "",
 } 



export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authentication: (_, action) => {
        return action.payload
    }
  },
})

export const getUser=(state) => state.authentication;
export const { authentication } = authenticationSlice.actions;
export default authenticationSlice.reducer;