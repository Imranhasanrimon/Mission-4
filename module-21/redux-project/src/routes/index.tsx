import App from "@/App";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                // index: true,
                path: "tasks",
                element: <Tasks />,
            },
            {
                path: "users",
                element: <Users />
            },
        ]
    }
])

export default router;