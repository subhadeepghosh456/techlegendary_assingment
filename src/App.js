import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Maincontainer from "./Components/Maincontainer";
import Body from "./Components/Body";
import Team from "./Components/Team";
import { Provider } from "react-redux";
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Maincontainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
