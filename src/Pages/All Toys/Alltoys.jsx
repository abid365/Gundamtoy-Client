import React, { useEffect, useState } from "react";
import ToyRow from "../../Components/ToyRow";

const Alltoys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-one-henna.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  //   console.log(toys);
  return (
    <div className="overflow-x-auto">
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
        {toys.map((toy) => (
          <ToyRow key={toy._id} toy={toy}></ToyRow>
        ))}
      </table>
    </div>
  );
};

export default Alltoys;

/* 
  
 */
