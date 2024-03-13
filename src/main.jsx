import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PokemonDetail from './pages/PokemonDetail.jsx'
import PokemonGeneration from './pages/PokemonGeneration.jsx'
import HomePokemon from './pages/HomePokemon.jsx'
import './index.css'

const routes = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePokemon />,
        loader: () => {
          return fetch("https://tyradex.vercel.app/api/v1/pokemon");
        }
      },
      {
        path: "/pokemon/gen/:id",
        element: <PokemonGeneration />,
        loader: ({ params }) => {
          return fetch(`https://tyradex.vercel.app/api/v1/gen/${params.id}`);
        }
      },   
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
