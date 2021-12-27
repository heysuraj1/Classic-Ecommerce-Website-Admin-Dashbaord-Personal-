import baseUrl from '../helpers/baseUrl'
import {useEffect} from 'react'
import WebsiteTraffice from '../Components/Main/WebsiteTraffice'
import axios from 'axios'
const Customers = ({products}) => {
  
  console.log(products)

    return (
        <div>
            
            <main id="main" className="main">
  <div className="pagetitle">
    <h1>Orders <i className="bx bxs-shopping-bag-alt"/></h1>
    
  </div>{/* End Page Title */}
  <section className="section">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body mt-5">



          <table className="table datatable">
  <thead>
    <tr>
      
      
      <th scope="col">User Email</th>
      <th scope="col">Purchased Item</th>
      <th scope="col">Item Quantity</th>
      <th scope="col">Total price</th>
      <th scope="col">Purchased Time</th>
      <th scope="col">More Details</th>
    </tr>
  </thead>
  <tbody>

{
  products.map(hit =>{
    let ken = hit.createdAt
    let ben = ken.toString()
    return <tr key={hit._id}>
    
    

    <td>{hit.email}</td>
    <td>{hit.products.map(item =>{
      return <td key={item._id}>{item.product}</td>
    })}</td>
    <td>{hit.products.map(item =>{
      return <td key={item._id}>X {item.quantity}</td>
    })}</td>



    {/* <td>{hit.products.quantity}</td> */}
    <td>₹ {hit.total}</td>
    <td>{ben}</td>
    <td><button className='btn btn-success'>Know More</button></td>
  </tr>
  })
}


    



  </tbody>
</table>







          </div>
        </div>
      </div>
      
    </div>
  </section>
</main>

           
        </div>
    );
}

export default Customers;



export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/AllOrders`)
  const data = await res.json()
  console.log(data)

  
  return {
    props: {
      products:data
    }, // will be passed to the page component as props
  }
}