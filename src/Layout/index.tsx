import { Outlet, NavLink } from 'react-router-dom'
import './style.css'

export function Layout() {
  const style = ({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' });
  return (
    <>
	  <header>Header</header>	  
      <main>
	    <aside>
		  <nav>
            <NavLink to='/home' style={style}>Home</NavLink>
            <NavLink to='/users' style={style}>Users</NavLink>
          </nav>
		</aside>
		<article>
		  <section>
            <Outlet />
		  </section>
		</article>
      </main>
	  <footer>footer</footer>
	</>
  );
}