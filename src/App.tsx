import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { Products } from './pages/Products.tsx';
import { Contact } from './pages/Contact.tsx';
import { NoPage } from './pages/NoPage.tsx';
import { ProductDetails } from './pages/ProductDetails.tsx';

export  function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails/>} />

          <Route path="contact" element={<Contact  />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}