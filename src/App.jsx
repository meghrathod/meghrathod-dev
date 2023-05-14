import About from "./Pages/About";
import Home from "./Pages/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  }

]);


function App() {

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  )
}

export default App
