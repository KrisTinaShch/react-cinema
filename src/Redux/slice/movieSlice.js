import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    films: [],
    status: null,
    errors: null,
}

export const fetchMovies = createAsyncThunk('movie/fetchmovies', async () => {

    return axios.get("https://67c5bc26351c081993fb3899.mockapi.io/cinema/cinema-list")
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        let errorMessage = '';
        switch (error.response?.status) {
            case 500:
                errorMessage = 'Ошибочка'
                break;
        
            default:
                break;
        }
        console.log(error);
        throw new Error(errorMessage);
    })
});

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.films = action.payload;
                state.status = 'fulfilled';
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'loading';
                state.errors = action.error.message;
                console.error(action.error.message)
            })
    },
})

export default movieSlice.reducer;