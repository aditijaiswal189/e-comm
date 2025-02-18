import { useEffect, useState } from "react";
import { myProducts } from "../lib/api";
import { Link } from "react-router-dom";
import { useProductState } from "../lib/productContext";

export function Products() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    myProducts().then((data) => {
      console.log("ll", data);
      setProductList(data);
    });
  }, []);
  console.log("a", productList);
  const { state, dispatch } = useProductState();
  const handleAddToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <>
      {/* <h3>Products</h3> */}
      <div className="grid grid-cols-4 gap-4 my-4 ">
        {productList.length > 0 ? (
          productList.map((item) => (
            <div key={item.id}>
              <Link to={`${item.id}`}>
                <div className="border-2 rounded-lg">
                  <div>
                    {" "}
                    <img src={item.image} className="w-40 h-40" />
                    <div className="line-clamp-1 text-blue-700  text-wrap ">
                      {item.title}
                    </div>
                    <div className="line-clamp-2">{item.description}</div>
                    <div>{item.rating.rate}</div>
                    <div>$ {item.price}</div>
                  </div>
                </div>
              </Link>
              <div>
                <button onClick={() => handleAddToWishlist(item)}>
                  Add to wishlist
                </button>
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
}
