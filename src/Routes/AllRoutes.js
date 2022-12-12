import { createBrowserRouter } from "react-router-dom"
import Main from "../LayOut/Main/Main"
import Home from "../Pages/Home/Home"
import CarResale from "../ProjectDetails/CarResale/CarResale";
import GeniusCar from "../ProjectDetails/GeniusCar/GeniusCar";
import HayDay from "../ProjectDetails/HayDay/HayDay";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/carresale',
                element: <CarResale></CarResale>
            },
            {
                path: '/hayday',
                element: <HayDay></HayDay>
            },
            {
                path: '/geniuscar',
                element: <GeniusCar></GeniusCar>
            }
        ]
    }
]);

export default router;