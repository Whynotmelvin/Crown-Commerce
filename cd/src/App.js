import Home from "./routes/home/home.components"
import {
  createBrowserRouter
} from "react-router-dom";


const Router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
]);


export default Router;


