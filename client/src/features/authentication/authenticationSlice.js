import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from "axios";

 const initialState = {
    email: "",
    familyName: "",
    givenName: "",
 } 

 export const getEvents = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
        const res = await Axios.get(`https://www.googleapis.com/calendar/v3/calendars/${getUser.email}/events`)
        .then((data)=> data.json())
        return res
    }
 )

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
  extraReducers:{
    [getEvents.pending]:(state)=>{
        state.loading = true;
    },
    [getEvents.fulfilled]:(state, {payload})=>{
        state.loading=false;
        state.entities=payload;
        state.isSuccess=true;
    },
    [getEvents.rejected]:(state)=>{
        state.loading=false;
        state.isSuccess=false;
    },
  },
})

export const getUser=(state) => state.authentication;
export const { authentication } = authenticationSlice.actions;
export default authenticationSlice.reducer;