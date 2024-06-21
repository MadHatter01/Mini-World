import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
   <header className="header">
    <NavLink to="/" className="p-2 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">MiniWorld</p>
    </NavLink>

    <nav className = 'flex text-lg gap-7 font-medium'>
        <NavLink to="/about">
            
        </NavLink>

    </nav>
   </header>
  )
}

export default Navbar