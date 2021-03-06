import React from "react";
import { useNavigate } from "react-router-dom";
import useService from "../CUSTOM_Hook/useService";

const ManageService = () => {
  const [services, setServices] = useService();

  const deleteUser = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure want to delete?");

    if (confirm) {
      fetch(`https://shrouded-depths-33292.herokuapp.com/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1>Manage service from here mate</h1>
      <p>{services.length}</p>

      {services.map((service) => (
        <div className="w-75 mx-auto m-5" key={service._id}>
          <h2 className="text-danger">{service.name}</h2>
          <h2>{service.description}</h2>
          <button onClick={() => deleteUser(service._id)} className="btn btn-danger">
            Delete Service
          </button>
          <button onClick={() => navigate(`/updateservice/${service._id}`)} className="btn btn-warning ms-3">
            Update Service
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
