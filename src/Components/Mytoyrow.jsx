import React from "react";
import { Link } from "react-router-dom";

const Mytoyrow = ({ mytoy }) => {
  console.log(mytoy);
  const { ToyName, SellerName, Price, AvailableQuantity, Sub_category } = mytoy;
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
        <td>
          <Link>
            <button className="btn-success btn">Details</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Mytoyrow;
