import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
// import { reducer, initialState } from "./lib/reducer";
import { Layout } from "./pages/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import { Products } from "./pages/Products.tsx";
import { Contact } from "./pages/Contact.tsx";
import { NoPage } from "./pages/NoPage.tsx";
import { ProductDetails } from "./pages/ProductDetails.tsx";
import { Cart } from "./pages/Cart.tsx";
import { Wishlist } from "./pages/Wishlist.tsx";
import { ProductContext, reducer, initialState } from "./lib/productContext.ts";

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "state");
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route
              path="products/:id"
              element={
                <div className="border-2">
                  <ProductDetails />
                </div>
              }
            />

            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}
