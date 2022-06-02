import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState({})
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8081/products/${id}`)
            .then((r)=>r.json())
            .then((d) => setProducts(d))
    
        }
         },[id])
  return (
    <div>Product id : {id}
    <div>Product Name: {products.name}</div>
    <div>Product Price: {products.price}</div>
    </div>
   
  )
}

export default Product
