import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SuccessPage from "../components/SuccessPage";
import CancelPage from "../components/CancelPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/cancel",
    element: <CancelPage />,
  },
]);

export default routes;
