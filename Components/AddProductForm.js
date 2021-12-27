import baseUrl from '../helpers/baseUrl'

const AddProductForm = () => {

  const handelDelete = async (ctx) =>{
    console.log('Delete Button Clicked')
    const res = await fetch(`${baseUrl}/api/deleteProduct/61bd28f34b03a0105a111362`,{
      method:'DELETE'
    })
    console.log({res})
    await res.json()
    toast.success("Deleted Successfully")
    
    const timer = setTimeout(() => {
      router.push('/AllProducts')
    }, 0.1);
    return () => clearTimeout(timer);
  
  }
    return (
        <form
                   
                   
                    
                    onSubmit={handelSubmit}
                  >
                    <div className="row gy-4">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          placeholder="Product Name"
                          
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="number"
                          className="form-control"
                          value={price}
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                          placeholder="Price"
                          
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          value={collect}
                          onChange={(e) => {
                            setCollect(e.target.value);
                          }}
                          placeholder="Category"
                          
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                        type="text"
                          className="form-control"
                          value={description}
                          rows={5}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          
                          placeholder="Description"
                          
                          
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            setMedia(e.target.files[0]);
                          }}
                          className="form-control"
                          
                        />
                      </div>
                      <div className="col-md-12 text-center">
                        <button className="btn btn-success" type="submit">
                          UPLOAD
                        </button>
                      </div>
                    </div>
                  </form>
    );
}

export default AddProductForm;