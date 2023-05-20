import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Shared/NotFound";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Alltoys from "../Pages/All Toys/Alltoys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/alltoys",
        // loader: () => fetch(),
        element: <Alltoys></Alltoys>,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

export default router;
