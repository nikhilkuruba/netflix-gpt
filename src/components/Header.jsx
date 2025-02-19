import logo from "@/assets/logo.svg"
import { Navigate } from "react-router-dom"
const Header = () => {
  return (
    <div className="header absolute px-8 py-4 w-full flex justify-between items-center">
      <img src={logo} alt="logo" className="h-10" />
    </div>
  )
}

export default Header
