import {configureStore} from "@reduxjs/toolkit";
import authenticationReducer from "../features/authentication/authenticationSlice";
import eventsReducer from "../features/events/eventsSlice";

export default configureStore({
    reducer:{
        authentication: authenticationReducer,
        events: eventsReducer,
    },
})

