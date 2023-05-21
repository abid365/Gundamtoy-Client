import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Shared/NotFound";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Alltoys from "../Pages/All Toys/Alltoys";
import AddToys from "../Pages/Add Toys/AddToys";
import SingleToy from "../Pages/SingleToy/SingleToy";
import Mytoys from "../Pages/My Toys/Mytoys";
import PrivateRoute from "./PrivateRoute";

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
        element: <Alltoys></Alltoys>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-one-henna.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <Mytoys></Mytoys>
          </PrivateRoute>
        ),
      },

      // {
      //   path: "/toy/:id",
      //   element: <ToyDetails></ToyDetails>,
      //   loader: ({ params }) => {
      //     fetch(`http://localhost:5000/toys/${params.id}`);
      //   },
      // },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

export default router;
