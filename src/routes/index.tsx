import UserRoot from "../pages/user/userRoot";
import Home from "../pages/user/home";
import AdminNews from "../pages/admin/adminNews";
import About from "../pages/user/about";
import AdminRoot from "../pages/admin/adminRoot";
import Dashboard from "../pages/admin/dashboard";
import AddNews from "../pages/admin/addNews";
export const routes = [
  {
    path: "/",
    element: <UserRoot />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/products/:id",
      //   element: <Details />,
      // },

      // ,
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/register",
      //   element: <Register />,
      // },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },

      {
        path: "/admin/addNews",
        element: <AddNews />,
      },
      {
        path: "/admin/adminNews",
        element: <AdminNews />,
      },
    ],
  },
];
