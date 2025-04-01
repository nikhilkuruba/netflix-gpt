
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import Browse from "@/components/Browse"
import Login from "@/components/Login"

const Body = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse />}
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body