import { API_OPTIONS } from "@/utils/constant"
import { useEffect } from "react"
import { setTrailer } from '@/store/movieSlice'
import { useSelector, useDispatch } from "react-redux"
const VideoBackgroud = ({ movieId, className }) => {
  const dispatch = useDispatch()
  const trailer = useSelector(store => store.movies?.trailer)
  const getMovieVideo = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
      const data = await response.json()
      console.log(data);
      const trailer = data.results.find(video => video.type === 'Trailer') || data[0]
      console.log(trailer);
      
      dispatch(setTrailer(trailer))
    } catch (error) {
      console.error('Error fetching video:', error)
    }
    return null
  }

  useEffect(() => { getMovieVideo() }, [])

  return (
    <div className={className}>
      <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${trailer?.key || ''}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&showinfo=0&modestbranding=1`}
      title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >

       </iframe>
    </div>
  )
}

export default VideoBackgroud