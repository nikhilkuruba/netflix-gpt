import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from "@/utils/constant"
import { addPopularMovies } from '@/store/movieSlice'
import { useDispatch } from 'react-redux'
import MainContainer from '@/components/MainContainer'

 const Browse = () => {
  const dispatch = useDispatch()
  
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)
      const data = await response.json()
      dispatch(addPopularMovies(data.results))
      console.log(data)
    } catch (error) {
      console.error('Error while fetching data:', error)
    }
  }

  useEffect(() => {fetchData()}, [])
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse