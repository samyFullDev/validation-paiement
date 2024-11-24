import "./App.css";
import AddPaiement from "./addpaiement/AddPaiement";
import Home from "./home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <AddPaiement />,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
