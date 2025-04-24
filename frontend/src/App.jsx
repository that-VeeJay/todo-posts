import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}
