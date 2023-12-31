import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
  console.log(toy);
  const { ToyName, SellerName, Price, AvailableQuantity, Sub_category, _id } =
    toy;
  return (
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
          <Link to={`/toy/${_id}`}>
            <button className="btn-success btn">Details</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default ToyRow;
