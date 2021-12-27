import baseUrl from "../helpers/baseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactLoaderQuotes from "react-loader-quotes";

//{ products }
const AllProducts = () => {
  const router = useRouter();
  let isLoading = false;
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [collect, setCollect] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    

    getUsers();
  }, []);

  const getUsers = () => {
    fetch(`${baseUrl}/api/products`).then((result) => {
      result.json().then((resp) => {
        setUser(resp);
        setName(resp[0].name);
        setDescription(resp[0].description);
        setPrice(resp[0].price);
        setCollect(resp[0].collect);
        setUserId(resp[0]._id);
        // setMedia(resp[0].mediaUrl)
      });
    });
    isLoading = false;

  };

  const selectUser = (name, price, description, id, collect) => {
    setName(name);
    setPrice(price);
    setDescription(description);
    setUserId(id);
    setCollect(collect);

    console.log(id);
  };

  const updateUser = async () => {
    // async function  updateUser ()

    try {
      // const mediaUrl = await imageUpload();

      let item = { name, price, description, userId, collect };
      fetch(`${baseUrl}/api/updateData`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
          getUsers();
        });
      });
      toast.success("Product Updated Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Something Went Wrong Please Try Again Later", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const imageUpload = async () => {
      console.log("image called");

      const data = new FormData();
      data.append("file", "https://wallpaperaccess.com/full/1089164.jpg");
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
  };

  return (
    <div>
      {isLoading ? (
        <ReactLoaderQuotes
          loading={true}
          speed={3.5}
          quotes={[
            `Be Patient`,
            `We Are Bringing Something Amazing For You`,
            `We Know You Don't Like To Wait`,
            `But It Will Not Take Much Time`,
          ]}
        />
      ) : (
        ""
      )}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            All Products <i className="bx bxs-shopping-bag" />
          </h1>
        </div>
        {/* End Page Title */}
        <section className="section mb-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body mt-5">
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Collection</th>
                      </tr>
                    </thead>

                    <tbody>
                      {users.map((hit) => {
                        // setData(hit.name)
                        return (
                          <tr key={hit._id}>
                            <td>
                              <img src={hit.mediaUrl} width={50} alt="" />
                            </td>
                            <td>{hit.name.slice(0, 20)}...</td>
                            <td>{hit.description.slice(0, 20)}...</td>
                            <td>₹ {hit.price}</td>
                            <td>{hit.collect}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target={`#${hit.collect}`}
                                onClick={() =>
                                  selectUser(
                                    hit.name,
                                    hit.price,
                                    hit.description,
                                    hit._id,
                                    hit.collect
                                  )
                                }
                              >
                                EDIT
                              </button>
                              <div
                                className="modal fade"
                                id={`${hit.collect}`}
                                tabIndex={-1}
                              >
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <form className="row g-3">
                                        <div className="col-12">
                                          <label className="form-label">
                                            Name
                                          </label>
                                          <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                              setName(e.target.value);
                                            }}
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="col-12">
                                          <label className="form-label">
                                            Price
                                          </label>
                                          <input
                                            type="number"
                                            value={price}
                                            onChange={(e) => {
                                              setPrice(e.target.value);
                                            }}
                                            className="form-control"
                                          />
                                        </div>

                                        <div className="col-12">
                                          <label className="form-label">
                                            Category
                                          </label>
                                          <input
                                            value={collect}
                                            onChange={(e) => {
                                              setCollect(e.target.value);
                                            }}
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>

                                        <div className="col-12">
                                          <label className="form-label">
                                            Description
                                          </label>
                                          <textarea
                                            rows={5}
                                            value={description}
                                            onChange={(e) => {
                                              setDescription(e.target.value);
                                            }}
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>

                                        <div className="col-12">
                                          <label className="form-label">
                                            Image
                                          </label>
                                          <input
                                            type="file"
                                            className="form-control"
                                            accept="image/*"
                                          />
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      {/* <button type="button" className="btn btn-danger " data-bs-dismiss="modal">Delete</button> */}
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#${hit.name.slice(
                                          0,
                                          2
                                        )}`}
                                      >
                                        Delete
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        onClick={updateUser}
                                      >
                                        Update Changes
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <div
                              className="modal fade"
                              id={`${hit.name.slice(0, 2)}`}
                              tabIndex={-1}
                            >
                              <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">
                                      Are You Sure ?
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    />
                                  </div>
                                  <div className="modal-body">
                                    <h3 className="text-center">
                                      Once Deleted Will Never Come Back !
                                    </h3>
                                    <p className="text-center mt-4">
                                      {" "}
                                      We want to warn you that if you deleted
                                      this product then you will not be able to
                                      restore it in future. If you understand
                                      this and still want to delete this
                                      products then click below.
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-dismiss="modal"
                                    >
                                      No Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      data-bs-dismiss="modal"
                                      onClick={() => handelDelete(hit._id)}
                                    >
                                      Yes Delete This
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="container mt-5 mb-5 text-center">
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#verticalycentered"
                    >
                      {" "}
                      Add More <i className="bx bxs-file-plus" />
                    </button>
                  </div>
                  <div
                    className="modal fade"
                    id="verticalycentered"
                    tabIndex={-1}
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">
                            Add More Products <i className="bx bxs-file-plus" />
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form className="row g-3">
                            <div className="col-12">
                              <label
                                htmlFor="inputNanme4"
                                className="form-label"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputNanme4"
                              />
                            </div>
                            <div className="col-12">
                              <label
                                htmlFor="inputEmail4"
                                className="form-label"
                              >
                                Price
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputEmail4"
                              />
                            </div>
                            <div className="col-12">
                              <label
                                htmlFor="inputPassword4"
                                className="form-label"
                              >
                                Quantity
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPassword4"
                              />
                            </div>
                            <div className="col-12">
                              <label
                                htmlFor="inputPassword4"
                                className="form-label"
                              >
                                Category
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputPassword4"
                              />
                            </div>
                            <div className="col-12">
                              {/* <label htmlFor="inputAddress" className="form-label">Address</label> */}
                              <input type="file" className="form-control" />
                            </div>
                            <div className="text-center">
                              <button type="submit" className="btn btn-primary">
                                Upload
                              </button>
                              {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                            </div>
                          </form>
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

export default AllProducts;

// export async function getServerSideProps() {
//   const res = await fetch(`${baseUrl}/api/products`);
//   const data = await res.json();
//   // console.log(data)
//   return {
//     props: {
//       products: data,
//     }, // will be passed to the page component as props
//   };
// }
