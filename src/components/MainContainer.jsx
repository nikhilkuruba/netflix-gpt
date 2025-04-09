import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from '@/components/VideoTitle'
import VideoBackgroud from '@/components/VideoBackgroud'
const MainContainer = () => {
  const movies = useSelector(store => store.movies?.popularMovies)
  if (!movies) return

  const displayMovie = movies[0]
  console.log(displayMovie);
  
  const { original_title, overview, id } = displayMovie
  return (
    <div className='main-container relative w-full h-[90vh] overflow-hidden'>
      <VideoBackgroud className="absolute top-0 left-0 z-[-1] w-full h-full object-cover" movieId={id} />
      <div className="trailer-overlay h-full w-full absolute top-0 left-0 z-1 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <VideoTitle className="absolute top-[50%] left-[5%] text-white z-2 max-w-[40%] translate-y-[-50%]" title={original_title} overview={overview}  />
    </div>
  )
}
export default MainContainer