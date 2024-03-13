import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <Link className="title-pokemonlist" to={"/"}>
        <p >Pokemon List</p>
      </Link>
      < Outlet />
    </>
  )
}

export default App
