import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Inicio from "./components/layouts/pages/Inicio"
import Portada from "./components/layouts//pages/Portada"
import Bacteria from "./components/layouts/pages/Bacteria";
  let router= createBrowserRouter([
{
  path:"/",
  element:<Portada/>,
},
{
  path:"/inicio",
  element:<Inicio></Inicio>,
},
{
  path:"dominio-bacteria",
  element:<Bacteria></Bacteria>
}
  ])
  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  export default App;