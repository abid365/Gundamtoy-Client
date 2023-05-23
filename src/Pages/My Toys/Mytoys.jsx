import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Auth/AuthProvider";
import Mytoyrow from "../../Components/Mytoyrow";
import { ToastContainer, toast } from "react-toastify";

const Mytoys = () => {
  const { user } = useContext(UserContext);
  // console.log(user);
  const [mytoys, setMytoys] = useState([]);
  //   const mail = user?.email;
  //   console.log(mail);

  const url = `https://assignment-11-server-one-henna.vercel.app/toys?SellerEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMytoys(data));
  }, [url]);

  // console.log(mytoys);

  const handleDelete = (id) => {
    const confirmDel = confirm("Press Ok to proceed deletation");
    if (confirmDel) {
      fetch(`https://assignment-11-server-one-henna.vercel.app/addtoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // alert("Deleted Successfully");
            toast.success("🤞 Deleted Successfully! ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            const survived = mytoys.filter((mytoy) => mytoy._id !== id);
            setMytoys(survived);
          }
        });
      console.log({ id });
    }
  };

  return (
    <div className="overflow-x-auto">
      <ToastContainer />
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Toy</th>
            <th>Seller</th>
            <th>Sub-Catagory</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>----</th>
          </tr>
        </thead>
        {mytoys.map((mytoy) => (
          <Mytoyrow
            key={mytoy._id}
            mytoy={mytoy}
            handleDelete={handleDelete}
          ></Mytoyrow>
        ))}
      </table>
    </div>
  );
};

export default Mytoys;
