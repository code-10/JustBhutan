import { createBrowserRouter } from "react-router-dom"

import Layout from "../layout"
import LandingPage from "../pages/landing_page/landing_page"

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children: [
            { index:true, element:<LandingPage />}
        ],
    }
])