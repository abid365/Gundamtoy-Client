import React from "react";
import { Link } from "react-router-dom";

const Mytoyrow = ({ mytoy, handleDelete }) => {
  console.log(mytoy);
  const { ToyName, SellerName, Price, AvailableQuantity, Sub_category, _id } =
    mytoy;

  return (
    // <div className="">My Toy is loading</div>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>#</th>
        <td>{ToyName}</td>
        <td>{SellerName}</td>
        <td>{Sub_category}</td>
        <td>{Price}</td>
        <td>{AvailableQuantity}</td>
        <td className="flex gap-1">
          <Link to={`/mytoys/update/${_id}`}>
            <button className="text-xs btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Update
            </button>
          </Link>
          <Link>
            <button
              onClick={() => handleDelete(_id)}
              className="text-xs btn  btn-error btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Delete
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Mytoyrow;
