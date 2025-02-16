import { Outlet, Link } from "react-router-dom";
export function Layout(){
    return (
        <>
          <nav >
            <ul className="flex flex-row gap-4">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/products/:id">Individual Product</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
    }

