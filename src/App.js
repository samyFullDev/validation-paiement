import "./App.css";
import AddPaiement from "./addpaiement/AddPaiement";
import Home from "./home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListPaiement from "./listPaiement/ListPaiement";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <AddPaiement />,
    },
    {
      path: "/paiement",
      element: <ListPaiement />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
