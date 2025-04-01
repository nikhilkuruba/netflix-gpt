import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    popularMovies: null,
    trailer: null
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload
    }
  }
})

export const { addPopularMovies, setTrailer } = movieSlice.actions

export default movieSlice.reducer