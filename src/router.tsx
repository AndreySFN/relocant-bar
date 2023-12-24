import {createHashRouter} from "react-router-dom";
import App from "@src/App.tsx";
import {DishMenu} from "@components/widgets/DishMenu.tsx";

export const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: '/menu',
        element: <DishMenu/>
    },
    {
        path: '/menu/:id',
        element: <DishMenu/>
    }
])

