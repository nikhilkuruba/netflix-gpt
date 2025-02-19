
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> }
])

export default router