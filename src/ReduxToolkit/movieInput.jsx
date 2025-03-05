import React, { useState } from 'react'
import {Admovie} from './movieSlice'
// usedispatch hook is used to input the data in the redux store
import { useDispatch } from 'react-redux'
const MovieInput = () => {
    const[addmovie, setAddMovie] = useState('')
    
    const dispatch = useDispatch();
    const handleaddMovie = () => {
        if (addmovie.trim()) {
            dispatch(Admovie(addmovie));
        }        
    }
  return (
    <>
       <h3 className='font-semibold text-4xl text-start text-red-500'>Movielist</h3>
        <div className='flex flex-col gap-3 mt-3'>
            <input
            onChange={(e)=>(setAddMovie(e.target.value))}
            value={addmovie} 
            className='w-1/2 border py-2 rounded px-2' 
            type='text' 
            placeholder='Enter Movie'/>
            <button onClick={handleaddMovie} className='py-2 px-4 rounded border border-red-600 w-fit text-red-600 hover:text-white hover:bg-red-600'>Add Movie</button>
        </div>
    </>
  )
}

export default MovieInput