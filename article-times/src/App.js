import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Entertaintment from "./pages/Entertaintment";
import Library from "./pages/Library";
import Politics from "./pages/Politics";
import Postview from "./pages/Postview";
import Science from "./pages/Science";
import Viewall from "./pages/Viewall";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/entertaintment",
        element: <Entertaintment />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
      {
        path: "/postview/:id",
        element: <Postview />,
      },
      {
        path: "/science",
        element: <Science />,
      },
      {
        path: "/viewall",
        element: <Viewall />,
      },
    ],
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
