import { useState } from "react";
import baseUrl from "../helpers/baseUrl";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BudgetReport from "../Components/Main/BudgetReport";
import axios from 'axios'
import Typewriter from 'typewriter-effect';
// import Typewriter from 'typewriter-effect/dist/core';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [collect, setCollect] = useState("");
  const router = useRouter();
  

  const handelSubmit = async (e) => {
    console.log("clicked");
    
    e.preventDefault();

    const mediaUrl = await imageUpload();
    try {
      
      const res = await fetch(`${baseUrl}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          mediaUrl,
          description,
          collect,
        }),
      });
      // console.log(res)
      const res2 = await res.json();
      if (res2.error) {
        // window.alert(res2.error);
      toast(res2.error)

      } else {
        // window.alert("Product Saved");
      // toast("Product Saved Successfully")
      toast.success('Product Saved Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        
        const timer = setTimeout(() => {
          router.push('/AddProduct')
        }, 0.5);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const imageUpload = async () => {
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", "mystore");
    data.append("cloud_name", "learnerboy");
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/learnerboy/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const res2 = await res.json();
    return res2.url;
  };







  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            Add Product <i className="bi bi-bag-plus-fill" />
          </h1>
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body mt-5">
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
                                              <div className="file-upload-wrapper">
                      </div>

                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            setMedia(e.target.files[0]);
                          }}
                          className="form-control "
                          
                        />
                        

                        
                      </div>
                      <div className="col-md-12 text-center">
                        <button className="btn btn-success" type="submit">
                          UPLOAD
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">

                <div className="card-body pb-0">
                  <h5 className="card-title">This Is How <span>Your Product Will Look Like 😊</span></h5>
                 {/* < ><span>Start Typing And See The Effect </span></> */}
                  
                  
                  <div id="budgetChart" style={{minHeight: 400}} className="echart" >
                  <div id="budgetChart" style={{width:'auto',height:'auto'}} className="echart ber" >
                    <div className="text-center mt-5">
                    <img
                      src={media ? URL.createObjectURL(media) : "/img/propro.png"}
                      className="img-fluid henc text-center"
                      alt="..."
                      width='auto'
                      
                    />
                    </div>
                    
                    <div className="container mt-5">

                    <p>Name: {name ? name : "Start Typing Name"}</p>
                    <p>Price: ₹ {price ? price : "Start Typing Price"}</p>
                    <p>Collection: {collect.toLowerCase() ? collect.toLowerCase() : "Start Typing Collections"}</p>
                    <p>Description: {description ? description.slice(0, 20) : "Start Typing "}...</p>
                  

                    </div>
                    </div>
                    </div>
              </div>
             
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddProduct;


