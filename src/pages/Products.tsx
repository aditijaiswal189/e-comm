
import { useEffect, useState } from "react"
import { myProducts } from "../lib/api"
import { Link } from "react-router-dom"

export  function Products(){
    const [productList , setProductList] = useState([])
    useEffect(() => {
myProducts().then((data) => {
    console.log("ll",data);
    setProductList(data);
})
    },[])
    console.log("a", productList)

    return (
        <>
        <h3>Products</h3>
        <div className="grid grid-cols-4 gap-4 my-4 ">
        {productList.length > 0 ? (
                productList.map((item) => (
                    <Link to={`${item.id}`} >
                    <div className="border-2 rounded-lg">
                    <div key={item.id} >
                        <img src={item.image} className="w-40 h-40"/>
                        <div className="line-clamp-2 text-blue-700  text-wrap ">{item.title}</div>
                        <div>{item.description}</div>
                        <div>{item.rating.rate}</div>
                        <div>{item.price}</div>
                    </div>
                    </div>
                    </Link>
                ))
            ) : (
                <p>Loading products...</p>
            )}
            </div>
        </>
    )
    }