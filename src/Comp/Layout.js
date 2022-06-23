import { Outlet, Link } from "react-router-dom";
import './nav.css';
 

const Layout = () => {
  return (
    <>
      <nav>
        <ol type = "i">
          <li>
            <Link to="/">Get All</Link>
          </li>
          
          <li>
            <Link to="/Add">Add</Link>
          </li>
          <li>
            <Link to="/Update">Update</Link>
          </li>
          <li>
            <Link to="/Delete">Delete</Link>
          </li>
        </ol>
      </nav>
      <br></br>
      <br></br>

 

      <Outlet />
    </>
  )
};

 

export default Layout;