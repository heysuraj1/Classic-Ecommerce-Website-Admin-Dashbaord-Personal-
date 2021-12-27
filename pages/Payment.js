import baseUrl from '../helpers/baseUrl'
import WebsiteTraffice from '../Components/Main/WebsiteTraffice'
const Payment = ({products}) => {
  console.log(products)
    return (
      <div>
            
      <main id="main" className="main">
<div className="pagetitle">
<h1>Payments <i className="bx bxs-shopping-bag-alt"/></h1>

</div>{/* End Page Title */}
<section className="section">
<div className="row">
<div className="col-lg-12">
  <div className="card">
    <div className="card-body mt-5">



    <table className="table datatable">
<thead>
<tr>



<th scope="col">Product</th>
<th scope="col">Item Quantity</th>
<th scope="col">Total price</th>
<th scope="col">Purchased Time</th>
<th scope="col">Payment Status</th>
</tr>
</thead>
<tbody>

{
products.map(hit =>{

  let win = hit.products.map(hit =>{
    return hit.quantity
  })

  // console.log(win)
  

  let gin = hit.total
  
  console.log(gin + win)

return <tr key={hit._id}>




<td>{hit.products.map(item =>{
return <td key={item._id}>{item.product}</td>
})}</td>
<td>{hit.products.map(item =>{
  
return <td key={item._id}>X {item.quantity}</td>
})}</td>



{/* <td>{hit.products.quantity}</td> */}
<td>₹ {hit.total}</td>
<td>{hit.createdAt}</td>
<td><button className='btn btn-success'>Done</button></td>
</tr>
})
}






</tbody>
</table>
{/* gin + win */}







    </div>
    <div className='d-flex justify-content-end'>
    <table className="table datatable ">
                <thead>
                  <tr className='d-flex justify-content-end px-5'>
                    <th scope="col ">Grand Total</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr className='d-flex justify-content-end px-5'>
                    
                    <td>₹ XYZ</td>
                    
                  </tr>
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

export default Payment;


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