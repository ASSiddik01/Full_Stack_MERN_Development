import React from "react";
import useServices from "../Shared/Hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();
  // Delete Data
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaing = services.filter((service) => service._id !== id);
          setServices(remaing);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h3>Manage</h3>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {" "}
            {service.name}{" "}
            <button onClick={() => handleDelete(service._id)}>X</button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
