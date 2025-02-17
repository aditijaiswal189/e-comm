import { Outlet, Link } from "react-router-dom";
export function Layout(){
    return (
        <>
          <nav className="p-4 m-4 border-2 border-red-400">
            <ul className="flex gap-4 justify-between">
              <div className="flex flex-row gap-4"><li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li></div>
              <div className="flex flex-row gap-4"><li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li></div>
              {/* <li>
                <Link to="/products/:id">Individual Product</Link>
              </li> */}
            </ul>
          </nav>
    <div className="m-4 p-4"><Outlet /></div>
          
        </>
      )
    }

