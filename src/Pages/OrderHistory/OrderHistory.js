import { async } from "@firebase/util";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const OrderHistory = () => {
  const [user, loading] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        await axios
          .get(`http://localhost:5000/orderhistory?email=${user?.email}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => setOrder(res?.data));
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>Your Order History here</h1>

      {order.map((data) => (
        <p key={data._id}>{data?.service}</p>
      ))}
    </div>
  );
};

export default OrderHistory;
