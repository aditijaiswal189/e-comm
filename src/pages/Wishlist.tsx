import { useProductState } from "../lib/productContext";
export function Wishlist() {
  const { state, dispatch } = useProductState();
  const handleRemoveFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  return (
    <>
      <div>Wishlist</div>
      {state.wishlist.length > 0 ? (
        state.wishlist.map((item) => (
          <div
            key={item.id}
            className="border-2 p-4 mx-2 my-4 flex flex-row justify-between items-center"
          >
            <div className="flex flex-row gap-10">
              <div>
                <img src={item.image} className="w-40 h-40" />
              </div>

              <div>
                <h3 className="text-2xl">{item.title}</h3>
                {/* <div>{item.category}</div> */}
                {/* <div className="text-xs line-clamp-">
                  {item.description}
                </div> */}
                {/* <div>{item.rating.rate}</div> */}
                <div>{item.rating.count}</div>
                <div>{item.price}</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className="border-2 px-16 py-2 text-white bg-red-500 "
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Wishlist is empty</p>
      )}
    </>
  );
}
