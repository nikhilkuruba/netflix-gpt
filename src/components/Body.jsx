
import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { auth } from "@/utils/firebase";
import { addUser, removeUser } from "@/store/userSlice";
import { createBrowserRouter } from "react-router-dom"
import Browse from "@/components/Browse"
import Login from "@/components/Login"

const Body = () => {
  const dispatch = useDispatch()
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse />}
  ])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
      } else {
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body