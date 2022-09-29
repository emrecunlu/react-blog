import Home from "./pages/Home";
import Works from "./pages/Works";
import Blogs from "./pages/Blogs";
import MainLayout from "./pages/MainLayout";

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'works',
                element: <Works />
            },
            {
                path: 'blogs',
                element: <Blogs />
            }
        ]
    },
]