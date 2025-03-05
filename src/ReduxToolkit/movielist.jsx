import React from 'react'
// useSelector Hook
// This hook is specialy for getting the data from a state
import { useSelector } from 'react-redux'  
const Movielist = () => {
    const Movies = useSelector((state)=>state.Mymovies.Movies)
  return (
    <>
    <div className='font-semibold text-4xl text-center text-red-500'>Movielist</div>
   <div className='grid grid-cols-3 gap-3 mt-4'>
   {
        Movies.map((items, index)=>(
            <div className='bg-gray-900 p-4 rounded  flex flex-col justify-between' key={index}>
                <div className='flex flex-col gap-2 '>
                <h2 className='text-white text-center font-semibold text-3xl'>{items.name}</h2>
                <p className='text-white text-center font-semibold text-lg'>{items.hero}</p>
                <p className='text-white text-center font-semibold text-base'>{items.writer}</p>
                </div>
                <p className='text-white text-center font-semibold text-sm'>{items.director}</p>
            </div>
        ))
    }
   </div>
    </>
  )
}

export default Movielist