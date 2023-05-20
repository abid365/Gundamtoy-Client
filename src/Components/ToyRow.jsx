import React from "react";

const ToyRow = ({ toy }) => {
  console.log(toy);
  const { ToyName, SellerName, Price, AvailableQuantity, Sub_category } = toy;
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
          <button className="btn-success btn">Details</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ToyRow;
