import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: [],
    status: null,
    errors: null,
}

export const fetchMovies = createAsyncThunk('movie/fetchmovies', async () => {
    try {
        const movies = await fetch("https://67c5bc26351c081993fb3899.mockapi.io/cinema/cinema-list");
        if (!movies.ok) {
            throw new Error('Error on server')
        }
        return movies.json();
    } catch (error) {
        console.log(error)
        throw error;
    }
});
const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

    }
})

export default movieSlice.reducer;