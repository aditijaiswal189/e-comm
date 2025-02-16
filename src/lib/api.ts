export async function myProducts (){
    try{
const response = await fetch("https://fakestoreapi.com/products") 
const data = await response.json()
console.log(data, "dd")
return data 

    }catch{
console.log(console.error("error"));

    }
}

export async function IndividualProducts({id}){
    console.log( "ddd",id, "id")
    try{
const response = await fetch (`https://fakestoreapi.com/products/${id}`)
const data = await response.json()
return data
    }catch{
console.log(console.log("error"))
    }
}