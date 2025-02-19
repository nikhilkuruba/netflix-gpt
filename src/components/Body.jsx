import Browse from "@/components/Browse"
import Login from "@/components/Login"
import { useEffect, useState } from "react"
import { RouterProvider } from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { auth } from "@/utils/firebase";
import { addUser, removeUser } from "@/store/userSlice";
import router from "@/routes"

const Body = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        dispatch(addUser({ uid, email, displayName }))
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