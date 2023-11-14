import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage></WatchPage>,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App scroll-container scroll-smooth">
      <Header></Header>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}
export default App;
