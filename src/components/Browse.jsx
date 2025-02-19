import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

 const Browse = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/")
  }
  return (
    <div>
      {/* <Header /> */}
      <button className="h-10 px-4 py-2" onClick={handleLogout}>Log out</button>

      Browse
    </div>
  )
}

export default Browse