import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Resgister from "../pages/Resgister";
import AllFood from "../pages/AllFood";
import Gallery from "../pages/Gallery";
import AddFood from "../pages/AddFood";
import FoodDetails from "../pages/FoodDetails";
import ErrorPages from "../pages/ErrorPages";
import FoodPurchasePage from "../pages/FoodPurchasePage";
import MyPostedFoods from "../pages/MyPostedFoods";
import MypostedUpdate from "../pages/MypostedUpdate";
import MyFoodOrders from "../pages/MyFoodOrders";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addFood',
                element: <PrivetRouter><AddFood></AddFood></PrivetRouter>
            },
            {
                path: '/allFoods',
                element: <AllFood></AllFood>
            },
            {
                path: '/food/:id',
                element: <FoodDetails></FoodDetails>
            },
            {
                path: '/foodpurchases/:id',
                element: <PrivetRouter><FoodPurchasePage></FoodPurchasePage></PrivetRouter>
            },
            {
                path: '/gellary',
                element: <Gallery></Gallery>
            },
            {
                path: '/mypostedfood',
                element: <PrivetRouter><MyPostedFoods></MyPostedFoods></PrivetRouter>
            },
            {
                path: '/postUpdate/:id',
                element: <MypostedUpdate></MypostedUpdate>
            },
            {
                path: '/myFoodOrder',
                element: <PrivetRouter><MyFoodOrders></MyFoodOrders></PrivetRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Resgister></Resgister>
            },
        ]
    }
], {
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
    }
})

export default router;