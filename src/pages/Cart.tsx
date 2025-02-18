import { useProductState } from "../lib/productContext";
export function Cart() {
  const { state, dispatch } = useProductState();
  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const totalSum = state.cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <div>Cart</div>
      {state.cart.length > 0 ? (
        state.cart.map((item) => (
          <div
            key={item.id}
            className="border-2 p-4 mx-2 my-4 flex flex-row justify-between items-center"
          >
            <div className="flex flex-row gap-10">
              <div>
                <img src={item.image} alt={item.title} className="w-40 h-40" />
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  {" "}
                  <h3 className="text-2xl">{item.title}</h3>
                  {/* <div>{item.category}</div> */}
                  {/* <div className="text-xs line-clamp-">
                  {item.description}
                </div> */}
                  <div>{item.rating.rate}</div>
                  <div>{item.rating.count}</div>
                  <div>{item.price}</div>
                </div>
                <div className="flex flex-row gap-4 text-2xl">
                  <button className="rounded-3xl bg-blue-400 w-8 text-center">
                    +
                  </button>
                  <span>Quantity</span>
                  <button className="rounded-3xl bg-blue-400 w-8 text-center">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="border-2 px-16 py-2 text-white bg-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
      {totalSum ? (
        <>
          <div className="flex flex-row gap-4 border-2 p-4 mx-2 my-4 justify-end items-end">
            <h3 className="text-2xl items-center">Total Price: </h3>
            <div className="text-2xl ">$ {totalSum}</div>
          </div>
        </>
      ) : null}
    </>
  );
}
