import React, { useContext } from "react";
import { UserContext } from "../../Auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToys = () => {
  const { user } = useContext(UserContext);

  //   add toy handle function
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = user?.displayName;
    const email = user?.email;
    const toyname = form.toyname.value;
    const catagory = form.subcatagory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const ratings = form.ratings.value;
    const desc = form.description.value;
    const image = form.image.value;
    const toy = {
      ToyName: toyname,
      Sub_category: catagory,
      Price: price,
      AvailableQuantity: quantity,
      Rating: ratings,
      PictureURL: image,
      Description: desc,
      SellerName: seller,
      SellerEmail: email,
    };
    console.log(toy);

    // send data to server
    fetch(`https://assignment-11-server-one-henna.vercel.app/addtoys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => {
        if (res.ok) {
          toast("✅ SuccessFully Added!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Failed To Add");
        }
      })
      .catch((error) => {
        toast.error("error occured");
      });
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <div className="bg-[url(https://i.ibb.co/Xz4f14J/Strike-Gundam-Hector-Trunnec.png)] bg-cover bg-center w-full h-full">
        {/* this is the background of form */}
        <div className="">
          <div className="card-body ">
            <form
              className="grid grid-cols-1 lg:grid-cols-2 gap-3"
              onSubmit={handleAddToy}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Seller Name
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Personal/Enterprise"
                  className="input input-bordered"
                  name="seller"
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Seller Email
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  placeholder="Personal/Enterprise mail"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Toy Pic Url
                  </span>
                </label>
                <input
                  type="url"
                  defaultValue={
                    "https://m.media-amazon.com/images/I/81j8GYy9pNL.jpg"
                  }
                  placeholder="Personal/Enterprise mail"
                  className="input input-bordered"
                  name="image"
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Toy Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Toy Name with Model"
                  className="input input-bordered"
                  name="toyname"
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="text-white font-bold" htmlFor="dropdown">
                  Select a sub-catagory
                </label>
                <select
                  name="subcatagory"
                  className="py-3 rounded-lg bg-white border-2"
                  id="dropdown"
                >
                  <option value="Not Selected">Select a catagory</option>
                  <option value="Perfect Grade">Perfect Grade</option>
                  <option value="Master Grade">Master Grade</option>
                  <option value="High Grade">High Grade</option>
                </select>
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="$ __.__"
                  className="input input-bordered"
                  name="price"
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered"
                  name="quantity"
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Ratings
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Ratings"
                  className="input input-bordered"
                  name="ratings"
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  name="description"
                />
              </div>
              <div className="form-control mt-9">
                <input
                  className="btn btn-primary btn-block"
                  type="submit"
                  value="Add Toy"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
