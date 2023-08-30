import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./views";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    }
]);

export default function Routes() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}