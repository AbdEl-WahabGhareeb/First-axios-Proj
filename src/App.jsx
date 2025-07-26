import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Recipes/Recipes";
import Notfound from "./Components/Notfound/Notfound";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Movies from "./Components/Movies/Movies";
import Recipes from "./Components/Recipes/Recipes";
import Loader from "./Components/Loader/Loader";
export default function App() {
    let routes = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "recipes",
                    element: <Recipes />,
                },
                {
                    path: "portfolio",
                    element: <Portfolio />,
                },
                {
                    path: "movies",
                    element: <Movies />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "*",
                    element: <Notfound />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}
