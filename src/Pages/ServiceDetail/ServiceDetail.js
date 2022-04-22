import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to detail: {service.name}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
