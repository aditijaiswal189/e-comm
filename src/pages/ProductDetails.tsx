import { useEffect, useState } from "react"
import { IndividualProducts } from "../lib/api"
import { useParams } from "react-router-dom"

export function ProductDetails(){
    const x =useParams()
    console.log(x,"params")
    const [details, setDetails]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const data =  await IndividualProducts(x)
            console.log("list", data)
            setDetails(data)
        }
    fetchData()
    
    },[x])
    return (<>
       {details ?( <>
       <img src={details.image} className="w-40 h-40"/>
       <div>{details.description}</div>
       {/* <div>{details.ratings.rate}</div>/ */}
       <div>{details.price}</div>
       <div>{details.category}</div>
        <div>{details.title}</div>
        </>
        ) : (<p>Loading...</p>)}
       </>
    )
}