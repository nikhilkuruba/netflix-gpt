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
    <>
    <VideoTitle title={original_title} overview={overview}  />
    <VideoBackgroud movieId={id} />
    </>
  )
}
export default MainContainer