import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import useServiceDetail from "../CUSTOM_Hook/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [user] = useAuthState(auth);
  const [service] = useServiceDetail(serviceId);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const orders = {
      email: user?.email,
      service: service.name,
      serviceId: serviceId,
      adress: event.target.adress.value,
      phone: event.target.phone.value,
    };

    axios.post("http://localhost:5000/orders", orders).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        toast("congraulations Your order has been succesful");
      }
      event.target.reset();
    });
  };

  return (
    <div>
      <h2>Please Checkout your booking {service.name}</h2>

      <div className="w-50 mx-auto">
        <form onSubmit={handlePlaceOrder}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder={user?.displayName}
              readOnly
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder={user?.email}
              readOnly
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Service
            </label>
            <input
              type="text"
              placeholder={service.name}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Address
            </label>
            <input type="text" autoComplete="off" className="form-control" name="adress" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone Number
            </label>
            <input type="number" className="form-control" name="phone" />
          </div>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
          <ToastContainer></ToastContainer>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
