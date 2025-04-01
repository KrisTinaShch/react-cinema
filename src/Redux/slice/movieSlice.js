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
                state.status = 'error';
                state.errors = action.error.message;
                console.error(action.error.message)
            })
    },
})

export default movieSlice.reducer;