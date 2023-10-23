import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        productList();
    },[])

    const productList=async()=>{
        let response = await fetch("http://localhost:7500/user_details");
        response = await response.json()
        setProduct(response);
    }

  return (
    <div className='product-list'>
      <h1>User Details</h1>
      <ul>
        <li>id</li>
        <li>title</li>
        <li>body</li>
      </ul>

      {
        product.length>0 ? product.map((item, index)=>(
            <ul key={item._id}>
                <li>{item.id}</li>
                <li>{item.title}</li>
                <li>{item.body}</li>
            </ul>
        ))
        : <h1>No Result Found</h1>
      }
    </div>
  )
}

export default ProductList






// import React, { useEffect, useState } from 'react'

// const ProductList = () => {
//     const [user_details, setUser_detail] = useState([]);

//     useEffect(async()=>{
//         let response = await fetch("http://localhost:7500/user_details",{
//             method: 'get',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//         })
//         response = await response.json();
//         console.log(response);
//         setUser_detail(response)
//     },[])

//   return (
//     <div className='product-list'>
//       <h1>Details List</h1>
//       {/* <table>
//         <thead>
//             <tr>
//                 <th>UserId</th>
//                 <th>Id</th>
//                 <th>Title</th>
//                 <th>Body</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 user_details.map((user)=>(
//                     <tr>
//                         <td>{user.userId}</td>
//                         <td>{user.id}</td>
//                         <td>{user.title}</td>
//                         <td>{user.body}</td>
//                     </tr>
//                 ))
//             }
//         </tbody>
//       </table> */}
//     </div>
//   )
// }

// export default ProductList
