import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from "axios";

const initialState = {
    entities: []
}
export const getEvents = createAsyncThunk(
    'events/getEvents',
    async (user) => {
        const res = await Axios.get(`https://www.googleapis.com/calendar/v3/calendars/primary/events`, { headers: { Authorization: `Bearer ${user.token}` } })
            .then((data) => data.json())
        return res
    }
)

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: {
        [getEvents.pending]: (state) => {
            state.loading = true;
        },
        [getEvents.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.entities = payload;
            state.isSuccess = true;
        },
        [getEvents.rejected]: (state) => {
            state.loading = false;
            state.isSuccess = false;
        },
    },
})

export default eventsSlice.reducer;