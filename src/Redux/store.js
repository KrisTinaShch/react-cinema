import {configureStore} from "@reduxjs/toolkit";
import counter from "./slice/counterSlice";
const store = configureStore({
    reducer:{
        counter,
    }
});

export default store;