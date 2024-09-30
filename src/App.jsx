import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import CommentList from "./pages/CommentList";
import CommentDetail from "./pages/CommentDetail";

const router = createHashRouter([
  {
    path: "/",
    element: <CommentList />,
  },
  {
    path: "/detail/:commentId",
    element: <CommentDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
