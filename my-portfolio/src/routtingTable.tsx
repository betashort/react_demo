import { createBrowserRouter } from "react-router-dom"
import Urls from "./pages/Urls"
import Page404 from "./pages/Page404/Page404"


const routtingTable = createBrowserRouter (
    [...Urls, {path:'*', element:<Page404 />, title: 'Not Found'}]
)

export default routtingTable