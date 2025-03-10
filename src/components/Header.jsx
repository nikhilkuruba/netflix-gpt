import logo from "@/assets/logo.svg"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { auth } from "@/utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className="header absolute px-8 py-4 w-full flex justify-between items-center">
      <img src={logo} alt="logo" className="h-10" />
      { user && <div className="flex items-center space-x-4">
        <img className="rounded-[0.25rem]" src={user?.photoURL || "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVC11njRAccYpkkyuBsUHtOOKYFGkwSR5W17rS9AcsA928D5_xgxoWHbUZESUThei8tFV3So6eTfjsvn0RRqN3kuxbq7KCI.png?r=59d"} alt="user icon" />
        <button className="h-10 px-4 py-2" onClick={handleLogout}>Log out</button>
      </div>}
    </div>
  )
}

export default Header
