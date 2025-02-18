import { useEffect, useState } from "react";
import { individualProducts } from "../lib/api";
import { useParams } from "react-router-dom";
import { useProductState } from "../lib/productContext";

export function ProductDetails() {
  const x = useParams();
  console.log(x, "params");
  const [details, setDetails] = useState([]);
  const { state, dispatch } = useProductState();
  useEffect(() => {
    async function fetchData() {
      const data = await individualProducts(x);
      console.log("list", data);
      setDetails(data);
    }
    fetchData();
  }, [x]);
  function handleAddToCart(details: any): void {
    dispatch({ type: "ADD_TO_CART", payload: details });
  }
  function handleAddToWishlist(details: any): void {
    dispatch({ type: "ADD_TO_WISHLIST", payload: details });
  }
  return (
    <>
      {details ? (
        <>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between gap-10">
              <div className="w-[320px] h-[320px] px-3 py-6">
                <img src={details.image} className="w-[320px]   h-[320px]" />
              </div>
              <div className="px-3 py-6">
                <h3 className="text-3xl px-3 py-6">{details.title}</h3>
                <div>{details.description}</div>
                <div>$ {details.price}</div>
                <div>{details.category}</div>
                <div>{details.title}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2 mx-[200px] justify-between">
              <button
                className="border-2 px-16 py-2 text-white bg-red-500"
                onClick={() => handleAddToWishlist(details)}
              >
                Add to Wishlist
              </button>
              <button
                className="border-2 px-16 py-2 text-amber-100 bg-blue-500"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
