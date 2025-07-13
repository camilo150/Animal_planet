import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Inicio from "./components/layouts/pages/Inicio"
import Portada from "./components/layouts//pages/Portada"
import Bacteria from "./components/layouts/pages/Bacteria";
import Arkea from "./components/layouts/pages/Arkea";
import Eukarya from "./components/layouts/pages/Eukarya";
import Plantae from "./components/layouts/pages/Plantae";
import Fungi from "./components/layouts/pages/Fungi";
import Animalia from  "./components/layouts/pages/Animalia.jsx";
import Protista from "./components/layouts/pages/Protista.jsx";
import Chromista from "./components/layouts/pages/Chromista.jsx";
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
},
{
  path:"/dominio-eukarya",
  element:<Eukarya></Eukarya>
},
{
  path:"/Plantae",
  element:<Plantae></Plantae>
},
{
  path:"/fungi",
  element:<Fungi></Fungi>
},
{
  path:"/animalia",
  element:<Animalia></Animalia>
},
{
  path:"/protista",
  element:<Protista></Protista>
},
{
  path:"/chromista",
  element:<Chromista></Chromista>
}
  ])
  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  export default App;