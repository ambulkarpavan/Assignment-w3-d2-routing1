import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
const [product, setproduct] = useState([]);

useEffect(() => {
    const fetchdata= async () =>{
        let r = await  fetch("http://localhost:8081/products")
        let d = await r.json();
        //console.log(d)
        setproduct(d)
    }  ;
    fetchdata();
},[])

  return (
    <div>Products: {" "}
    <div>
        <table style={{maxWidht:"200px" , margin:"auto"}}>
            <thead>
               <tr>
               <td>Product Name</td>
                <td>Price</td>
                <td>More Details</td>
               </tr>
            </thead>
            <tbody>
            {product.map((p)=>(
          <tr key= {p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td><Link to={`/products/${p.id}`}>More</Link></td>
                {/* {Object.values(item).map((val)=>{
                    return ( <td>{val}</td>) 
                })} */}
            </tr>
        ))}
            </tbody>
          
        </table>
        {/* {product.map((el) =>(

        )) } */}
    </div>
    </div>
  )
}

export default Products