import logo from "@/assets/logo.svg"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { auth } from "@/utils/firebase";
import { addUser, removeUser } from "@/store/userSlice";
import { useEffect } from "react";
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate('/browse')

      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return unsubscribe
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (!header) return
      if (window.scrollY > 50) {
        header.classList.remove("bg-black/50");
        header.classList.add("bg-black");
      } else {
        header.classList.remove("bg-black");
        header.classList.add("bg-black/50");
      }
    };
    
    window.addEventListener("scroll", handleScroll)

    return () => { window.removeEventListener("scroll", handleScroll) };
  }, []);
  

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log('logged out');
    }).catch((error) => {
      console.log(error, "hello")
    });
  }


  return (
    <div className="header fixed bg-black/50 top-0 left-0 h-15 transition-colors duration-1000 ease-in-out px-8 py-4 w-full flex justify-between items-center z-100">
      <img src={logo} alt="logo" className="h-10" />
      { user && <div className="flex items-center space-x-4">

        <img className="rounded-[0.25rem]" src={user?.photoURL || "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVC11njRAccYpkkyuBsUHtOOKYFGkwSR5W17rS9AcsA928D5_xgxoWHbUZESUThei8tFV3So6eTfjsvn0RRqN3kuxbq7KCI.png?r=59d"} alt="user icon" />
        <button className="h-10 px-4 py-2 cursor-pointer" onClick={handleLogout}>Log out</button>
      </div>}
    </div>
  )
}

export default Header
