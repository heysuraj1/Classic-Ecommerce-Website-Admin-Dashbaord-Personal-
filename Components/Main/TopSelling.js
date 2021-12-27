import baseUrl from '../../helpers/baseUrl'

const TopSelling = (products) => {
  console.log(products)
    return (
        <div className="card-body pb-0">
                  <h5 className="card-title">TopSelling <span>| Today</span></h5>
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Preview</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        
                      </tr>
                    </thead>
                    <tbody>
{/* 
                      {
                        products.map(hit =>{
                          return <tr key={hit._id}>
                          <th scope="row"><a><img src={hit.mediaUrl} width={50}  /></a></th>
                          <td><a href="#" className="text-primary fw-bold">{hit.name}</a></td>
                          <td>Rs {hit.price}</td>                        
                        </tr>
                        })
                      } */}



                      


                      
                    </tbody>
                  </table>
                </div>
    );
}

export default TopSelling;

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/products`)
  const data = await res.json()
  // console.log(data)
  return {
    props: {
      products:data
    }, // will be passed to the page component as props
  }
}