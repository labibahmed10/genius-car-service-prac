import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderHistory = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  console.log(user);

  useEffect(() => {
    const getOrders = async () => {
      await axios
        .get(`http://localhost:5000/orderhistory?email=${user?.email}`)
        .then((res) => setOrder(res?.data));
    };
    getOrders();
  }, [user]);
  return (
    <div>
      <h1>Your Order History here</h1>

      {order.map((data) => (
        <p>{data?.service}</p>
      ))}
    </div>
  );
};

export default OrderHistory;
