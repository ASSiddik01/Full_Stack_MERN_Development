import React, { useEffect, useState } from "react";
import { getTotal } from "../../uitilities/fakedb";
import Cosmatic from "../Cosmatic/Cosmatic";

// const cosmatics = [
//   { id: 1, name: "Foundation", price: 1200 },
//   { id: 2, name: "Nail Polis", price: 1200 },
//   { id: 3, name: "Makeup", price: 1200 },
//   { id: 4, name: "Eye Lashes", price: 1200 },
//   { id: 5, name: "Cream", price: 1200 },
// ];

// Generate form Json placeholder
// const cosmatics = [
//   {
//     _id: "62382adefaff0b3354e9db28",
//     price: 416,
//     name: "Tameka Avila",
//   },
//   {
//     _id: "62382ade5622d7ef2c53d2fc",
//     price: 197,
//     name: "Robert Webb",
//   },
//   {
//     _id: "62382ade665d1234be752c55",
//     price: 76,
//     name: "Hays Campbell",
//   },
//   {
//     _id: "62382ade9a6d69f8441dfce1",
//     price: 340,
//     name: "Turner Brock",
//   },
//   {
//     _id: "62382adef66d9dab356cb06f",
//     price: 432,
//     name: "Hester Carey",
//   },
// ];

const Cosmatics = () => {
  // From json data file
  const [cosmatics, setCosmatics] = useState([]);
  useEffect(() => {
    fetch('cosmatics.json')
      .then(res => res.json())
      .then(data => setCosmatics(data));
  }, [])
  
  const total = getTotal(cosmatics)

  return (
    <div>
      <h2>Total Price: {total} </h2>
      {cosmatics.map((cosmatic) => (
        <Cosmatic key={cosmatic.id} cosmatic={cosmatic}></Cosmatic>
      ))}
    </div>
  );
};

export default Cosmatics;
