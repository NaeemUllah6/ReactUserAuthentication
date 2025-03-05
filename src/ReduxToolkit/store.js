import {configureStore} from '@reduxjs/toolkit'
import MovieReducer from './movieSlice'
export const store = configureStore({
    reducer:{
        Mymovies : MovieReducer,
    }
})
export default store