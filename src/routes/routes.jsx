import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import Profile from "../pages/profile/Profile";
import GigForm from "../pages/newGig/components/GigForm";
import EmailValidateForm from "../pages/auth/components/EmailValidateForm";
import Auth from "../pages/auth/auth";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/newGig",
        element: <GigForm />,
      },
    ],
  },
  {
    path: "/next",
    element: <Auth />,
  },
]);
