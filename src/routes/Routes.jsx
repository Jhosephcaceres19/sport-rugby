import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";

export const Routes = () => {
    const routesPublic = [
        {
            path: "/",
            element: <App />
        }
    ];

    const router = createBrowserRouter(routesPublic);

    return <RouterProvider router={router} />;
};
