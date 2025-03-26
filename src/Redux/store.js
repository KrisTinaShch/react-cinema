import {configureStore} from "@reduxjs/toolkit";
import movie from "./slice/movieSlice";
const store = configureStore({
    reducer:{
        movie,
    }
});

export default store;