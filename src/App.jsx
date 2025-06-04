import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Inicio from "./components/layouts/pages/Inicio"
import Portada from "./components/layouts//pages/Portada"
import Bacteria from "./components/layouts/pages/Bacteria";
import Arkea from "./components/layouts/pages/Arkea";
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
  path:"/dominio-bacteria",
  element:<Bacteria></Bacteria>
},
{
path:"/dominio-arkea",
element: <Arkea></Arkea>
}
  ])
  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  export default App;